//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/doodlemushroom"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
DoodleUV_Size_1("DoodleUV_Size_1", Range(2, 16)) = 7
DoodleUV_Frame_1("DoodleUV_Frame_1", Range(1, 16)) = 5
_PageCurl_movement_1("_PageCurl_movement_1", Range(-6, 6)) = 0.594
_PageCurl_rotation_1("_PageCurl_rotation_1", Range(-1, 1)) = 0.307
_PageCurl_Curve_1("_PageCurl_Curve_1", Range(0, 0.3)) = 0.149
_PageCurl_Shadow_1("_PageCurl_Shadow_1", Range(0, 8)) = 1.5
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
float4 color    : COLOR;
};

sampler2D _MainTex;
float _SpriteFade;
float DoodleUV_Size_1;
float DoodleUV_Frame_1;
float _PageCurl_movement_1;
float _PageCurl_rotation_1;
float _PageCurl_Curve_1;
float _PageCurl_Shadow_1;

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
}


float4 PageCurl(sampler2D txt, float2 uv, float m1, float m2, float radius, float Shadow)
{
float4 text = float4(0,0,0,1);
float2 mouse = float2(m1, m1);
float2 mdir = float2(m2, -0.2);
float2 mouseDir = normalize(abs(mdir)*mdir);
float2 origin = mouse-mdir;
float mouseDist = origin;
mouseDist = distance(mouse, origin);
float proj = dot(uv - origin, mouseDir);
float dist = proj - mouseDist;
float2 linePoint = uv - dist * mouseDir;
if (dist > radius)
{
text.a = 1 - pow(saturate(dist - radius) * 8.5, Shadow * 0.05);
text.a *= tex2D(txt, uv).a;
}
else if (dist >= 0.)
{
float theta = asin(dist / radius);
float2 p2 = linePoint + mouseDir * (3.1415 - theta) * radius;
float2 p1 = linePoint + mouseDir * theta * radius;
float px = 1;
if ((p2.x < 0) || (p2.x > 1) || (p2.y < 0) || (p2.y > 1)) px = 0;
float4 t1 = tex2D(txt, p1);
float4 t2 = tex2D(txt, p2);
t1 = lerp(float4(0, 0, 0, tex2D(txt, uv).a*Shadow * 0.125), t1, t1.a);
text = lerp(float4(t1.rgb,t1.a), float4(t2.rgb,1), t2.a*px);
text.rgb *= pow(saturate((radius - dist) / radius), .2);
}
else
{
float2 p = linePoint + mouseDir * (abs(dist) + 3.1415 * radius);
float px = 1;
if ((p.x < 0) || (p.x > 1) || (p.y < 0) || (p.y > 1)) px = 0;
float4 t1 = tex2D(txt, uv);
float4 t2 = tex2D(txt, p);
text = lerp(float4(t1.rgb, t1.a), float4(t2.rgb, px), t2.a*px);
text=saturate(text);
}
return saturate(text);
}
float2 DoodleUV(float2 p, float Size, float Speed)
{
float2 co = p;
Speed = (floor(_Time * 20 * Speed) / Speed) * Speed;
co.x = sin((co.x * Size + Speed) * 4);
co.y = cos((co.y * Size + Speed) * 4);
p = lerp(p, p + co, 0.0005 * Size);
return p;
}
float4 frag (v2f i) : COLOR
{
float2 DoodleUV_1 = DoodleUV(i.texcoord,DoodleUV_Size_1,DoodleUV_Frame_1);
float4 _PageCurl_1 = PageCurl(_MainTex,DoodleUV_1,_PageCurl_movement_1,_PageCurl_rotation_1,_PageCurl_Curve_1,_PageCurl_Shadow_1);
float4 FinalResult = _PageCurl_1;
FinalResult.rgb *= i.color.rgb;
FinalResult.a = FinalResult.a * _SpriteFade * i.color.a;
FinalResult.rgb *= FinalResult.a;
FinalResult.a = saturate(FinalResult.a);
return FinalResult;
}

ENDCG
}
}
Fallback "Sprites/Default"
}
