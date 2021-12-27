//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/grass"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
_SourceNewTex_2("_SourceNewTex_2(RGB)", 2D) = "white" { }
_WorldGrassUV_Zoom_1("_WorldGrassUV_Zoom_1", Range(0.001, 1)) = 0.025
_WorldGrassUV_Worldsize_1("_WorldGrassUV_Worldsize_1", Range(0.01, 8)) = 2
_WorldGrassUV_Shadowintensity_1("_WorldGrassUV_Shadowintensity_1", Range(0, 2)) = 0.55
_WorldGrassUV_WindSpeed_1("_WorldGrassUV_WindSpeed_1", Range(0, 8)) = 1
_WorldGrassUV_WindDirection_1("_WorldGrassUV_WindDirection_1", Range(-4, 4)) = -0.5
_WorldGrassUV_GrassDirection_1("_WorldGrassUV_GrassDirection_1", Range(-8, 8)) = -3
_SpriteFade("SpriteFade", Range(0, 1)) = 1.0

// required for UI.Mask
[HideInInspector]_StencilComp("Stencil Comparison", Float) = 8
[HideInInspector]_Stencil("Stencil ID", Float) = 0
[HideInInspector]_StencilOp("Stencil Operation", Float) = 0
[HideInInspector]_StencilWriteMask("Stencil Write Mask", Float) = 255
[HideInInspector]_StencilReadMask("Stencil Read Mask", Float) = 255
[HideInInspector]_ColorMask("Color Mask", Float) = 15

}

SubShader
{

Tags {"Queue" = "Transparent" "IgnoreProjector" = "true" "RenderType" = "Transparent" "PreviewType"="Plane" "CanUseSpriteAtlas"="True" }
ZWrite Off Blend SrcAlpha OneMinusSrcAlpha Cull Off 

// required for UI.Mask
Stencil
{
Ref [_Stencil]
Comp [_StencilComp]
Pass [_StencilOp]
ReadMask [_StencilReadMask]
WriteMask [_StencilWriteMask]
}

Pass
{

CGPROGRAM
#pragma vertex vert
#pragma fragment frag
#pragma fragmentoption ARB_precision_hint_fastest
#include "UnityCG.cginc"

struct appdata_t{
float4 vertex   : POSITION;
float4 color    : COLOR;
float2 texcoord : TEXCOORD0;
};

struct v2f
{
float2 texcoord  : TEXCOORD0;
float4 vertex   : SV_POSITION;
float3 worldPos : TEXCOORD2;
float4 color    : COLOR;
};

sampler2D _MainTex;
float _SpriteFade;
sampler2D _SourceNewTex_2;
float _WorldGrassUV_Zoom_1;
float _WorldGrassUV_Worldsize_1;
float _WorldGrassUV_Shadowintensity_1;
float _WorldGrassUV_WindSpeed_1;
float _WorldGrassUV_WindDirection_1;
float _WorldGrassUV_GrassDirection_1;

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.worldPos = mul (unity_ObjectToWorld, IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
}


float4 WorldGrassDistortion(float3 worldpos, float2 uv, sampler2D t, sampler2D o, float zoom, float worldsize, float shadowintensity, float windspeed, float winddirection, float grassdirection)
{
float2 u = uv;
float2 u2 = uv;
float automove = _Time.y * grassdirection;
worldpos *= worldsize;
u.x = worldpos.r;
u.x += automove*windspeed;
u.y = worldpos.b;
u.y += worldpos.g;
u *= zoom;
float4 nt = tex2D(t, u);
float v = nt.r;
v = sin(v * 2) / 2;
uv.x += v*winddirection;
uv.x = lerp(uv.x, u2.x, 1 - u2.y);
uv = saturate(uv);
float4 r = tex2D(o, uv);
float shadow = lerp(v * 3, 0, u2.y);
r.rgb -= shadow*shadowintensity;
return r;
}
float4 frag (v2f i) : COLOR
{
float4 _WorldGrassUV_1 = WorldGrassDistortion(i.worldPos,i.texcoord,_SourceNewTex_2, _MainTex,_WorldGrassUV_Zoom_1, _WorldGrassUV_Worldsize_1,_WorldGrassUV_Shadowintensity_1,_WorldGrassUV_WindSpeed_1,_WorldGrassUV_WindDirection_1,_WorldGrassUV_GrassDirection_1);
float4 FinalResult = _WorldGrassUV_1;
FinalResult.rgb *= i.color.rgb;
FinalResult.a = FinalResult.a * _SpriteFade * i.color.a;
FinalResult = saturate(FinalResult);
return FinalResult;
}

ENDCG
}
}
Fallback "Sprites/Default"
}
