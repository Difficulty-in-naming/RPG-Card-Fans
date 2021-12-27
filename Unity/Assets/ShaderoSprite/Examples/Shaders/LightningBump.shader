//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/LightningBump"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
_Color ("Tint", Color) = (1,1,1,1)
[HideInInspector] _RendererColor("RendererColor", Color) = (1,1,1,1)
[HideInInspector] _Flip("Flip", Vector) = (1,1,1,1)
[PerRendererData] _AlphaTex("External Alpha", 2D) = "white" {}
[PerRendererData] _EnableExternalAlpha("Enable External Alpha", Float) = 0
_NewTex_1("NewTex_1(RGB)", 2D) = "white" { }
_SpriteFade("SpriteFade", Range(0, 1)) = 1.0

}

SubShader
{
Tags
{
"Queue" = "Transparent"
"IgnoreProjector" = "True"
"RenderType" = "Transparent"
"PreviewType" = "Plane"
"CanUseSpriteAtlas" = "True"

}

Cull Off
Lighting Off
ZWrite Off
Blend SrcAlpha OneMinusSrcAlpha


CGPROGRAM

#pragma surface surf Lambert vertex:vert  nolightmap nodynlightmap keepalpha noinstancing
#pragma multi_compile _ PIXELSNAP_ON
#pragma multi_compile _ ETC1_EXTERNAL_ALPHA
#include "UnitySprites.cginc"
struct Input
{
float2 uv_MainTex;
float4 color;
};

float _SpriteFade;
sampler2D _NewTex_1;

void vert(inout appdata_full v, out Input o)
{
v.vertex.xy *= _Flip.xy;
#if defined(PIXELSNAP_ON)
v.vertex = UnityPixelSnap (v.vertex);
#endif
UNITY_INITIALIZE_OUTPUT(Input, o);
o.color = v.color * _Color * _RendererColor;
}


void surf(Input i, inout SurfaceOutput o)
{
float4 _MainTex_1 = tex2D(_MainTex, i.uv_MainTex);
float4 NewTex_1 = tex2D(_NewTex_1, i.uv_MainTex);
float4 FinalResult = _MainTex_1;
o.Albedo = FinalResult.rgb* i.color.rgb;
o.Alpha = FinalResult.a * _SpriteFade * i.color.a;
o.Normal = UnpackNormal(NewTex_1);
clip(o.Alpha - 0.05);
}

ENDCG
}
Fallback "Sprites /Default"
}
