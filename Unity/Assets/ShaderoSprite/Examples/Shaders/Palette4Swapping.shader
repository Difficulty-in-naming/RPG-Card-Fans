//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/Palette4Swapping"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
_Palette4Swapping_Color1_1("_Palette4Swapping_Color1_1", COLOR) = (0.1921569,0.1176471,0.08627451,1)
_Palette4Swapping_Color2_1("_Palette4Swapping_Color2_1", COLOR) = (0.6784314,0.5647059,0.3647059,1)
_Palette4Swapping_Color3_1("_Palette4Swapping_Color3_1", COLOR) = (0.2392157,0.6352941,0.2627451,1)
_Palette4Swapping_Color4_1("_Palette4Swapping_Color4_1", COLOR) = (1,0.9803922,0.8470589,1)
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
float4 _Palette4Swapping_Color1_1;
float4 _Palette4Swapping_Color2_1;
float4 _Palette4Swapping_Color3_1;
float4 _Palette4Swapping_Color4_1;

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.worldPos = mul (unity_ObjectToWorld, IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
}


float4 WorldGrassDistortionMask(float3 worldpos, float2 uv, sampler2D t, sampler2D o, sampler2D m, float zoom, float worldsize, float shadowintensity, float windspeed, float winddirection, float grassdirection)
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
float4 nt2 = tex2D(m, u2);
float v = nt.r;
v = sin(v * 2) / 2;
uv.x += v*winddirection;
uv.x = lerp(uv.x, u2.x, 1 - u2.y);
uv = saturate(uv);
uv = lerp(uv, u2, 1-nt2.r);
float4 r = tex2D(o, uv);
float shadow = lerp(v * 3, 0, u2.y);
r.rgb -= shadow*shadowintensity;
return r;
}
float4 Palette4Swap(float4 txt, float2 uv, float4 col1, float4 col2, float4 col3, float4 col4)
{
float4 c1 = col1;
if (txt.r>0.25) c1 = col2;
if (txt.r>0.50) c1 = col3;
if (txt.r>0.75) c1 = col4;
c1.a = txt.a;
return c1;
}
float4 frag (v2f i) : COLOR
{
float4 _MainTex_1 = tex2D(_MainTex, i.texcoord);
float4 _Palette4Swapping_1 = Palette4Swap(_MainTex_1,i.texcoord,_Palette4Swapping_Color1_1,_Palette4Swapping_Color2_1,_Palette4Swapping_Color3_1,_Palette4Swapping_Color4_1);
float4 FinalResult = _Palette4Swapping_1;
FinalResult.rgb *= i.color.rgb;
FinalResult.a = FinalResult.a * _SpriteFade * i.color.a;
return FinalResult;
}

ENDCG
}
}
Fallback "Sprites/Default"
}
