//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/InfiniteEnergy"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
PositionUV_X_1("PositionUV_X_1", Range(-2, 2)) = 0.014
PositionUV_Y_1("PositionUV_Y_1", Range(-2, 2)) = 0
AnimatedTwistUV_AnimatedTwistUV_Bend_1("AnimatedTwistUV_AnimatedTwistUV_Bend_1", Range(-1, 1)) = 0.197
AnimatedTwistUV_AnimatedTwistUV_PosX_1("AnimatedTwistUV_AnimatedTwistUV_PosX_1", Range(-1, 2)) = 0.25
AnimatedTwistUV_AnimatedTwistUV_PosY_1("AnimatedTwistUV_AnimatedTwistUV_PosY_1", Range(-1, 2)) = 0.5
AnimatedTwistUV_AnimatedTwistUV_Radius_1("AnimatedTwistUV_AnimatedTwistUV_Radius_1", Range(0, 1)) = 0.5
AnimatedTwistUV_AnimatedTwistUV_Speed_1("AnimatedTwistUV_AnimatedTwistUV_Speed_1", Range(-10, 10)) = 0
AnimatedInfiniteZoomUV_Zoom_1("AnimatedInfiniteZoomUV_Zoom_1", Range(-1, 4)) = 0.54
AnimatedInfiniteZoomUV_PosX_1("AnimatedInfiniteZoomUV_PosX_1", Range(-1, 2)) = 0.235
AnimatedInfiniteZoomUV_PosY_1("AnimatedInfiniteZoomUV_PosY_1", Range(-1, 2)) = -0.036
AnimatedInfiniteZoomUV_Intensity_1("AnimatedInfiniteZoomUV_Intensity_1", Range(0, 4)) = 2.921
AnimatedInfiniteZoomUV_Speed_1("AnimatedInfiniteZoomUV_Speed_1", Range(-10, 10)) = -5.214
_NewTex_1("NewTex_1(RGB)", 2D) = "white" { }
_CircleFade_PosX_1("_CircleFade_PosX_1", Range(-1, 2)) = 0.313
_CircleFade_PosY_1("_CircleFade_PosY_1", Range(-1, 2)) = 0.5
_CircleFade_Size_1("_CircleFade_Size_1", Range(-1, 1)) = 0.192
_CircleFade_Dist_1("_CircleFade_Dist_1", Range(0, 1)) = 0.2
_CircleHole_PosX_1("_CircleHole_PosX_1", Range(-1, 2)) = 0.313
_CircleHole_PosY_1("_CircleHole_PosY_1", Range(-1, 2)) = 0.473
_CircleHole_Size_1("_CircleHole_Size_1", Range(0, 1)) = 0.786
_CircleHole_Dist_1("_CircleHole_Dist_1", Range(0, 1)) = 0.259
_Simple_Displacement_Value_1("_Simple_Displacement_Value_1", Range(-0.3, 0.3)) = 0.011
_Add_Fade_1("_Add_Fade_1", Range(0, 4)) = 1.615
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
float PositionUV_X_1;
float PositionUV_Y_1;
float AnimatedTwistUV_AnimatedTwistUV_Bend_1;
float AnimatedTwistUV_AnimatedTwistUV_PosX_1;
float AnimatedTwistUV_AnimatedTwistUV_PosY_1;
float AnimatedTwistUV_AnimatedTwistUV_Radius_1;
float AnimatedTwistUV_AnimatedTwistUV_Speed_1;
float AnimatedInfiniteZoomUV_Zoom_1;
float AnimatedInfiniteZoomUV_PosX_1;
float AnimatedInfiniteZoomUV_PosY_1;
float AnimatedInfiniteZoomUV_Intensity_1;
float AnimatedInfiniteZoomUV_Speed_1;
sampler2D _NewTex_1;
float _CircleFade_PosX_1;
float _CircleFade_PosY_1;
float _CircleFade_Size_1;
float _CircleFade_Dist_1;
float _CircleHole_PosX_1;
float _CircleHole_PosY_1;
float _CircleHole_Size_1;
float _CircleHole_Dist_1;
float _Simple_Displacement_Value_1;
float _Add_Fade_1;

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
}


float2 AnimatedTwistUV(float2 uv, float value, float posx, float posy, float radius, float speed)
{
float2 center = float2(posx, posy);
float2 tc = uv - center;
float dist = length(tc);
if (dist < radius)
{
float percent = (radius - dist) / radius;
float theta = percent * percent * 16.0 * sin(value);
float s = sin(theta + (_Time.y * speed));
float c = cos(theta + (_Time.y * speed));
tc = float2(dot(tc, float2(c, -s)), dot(tc, float2(s, c)));
}
tc += center;
return tc;
}
float4 Circle_Fade(float4 txt, float2 uv, float posX, float posY, float Size, float Smooth)
{
float2 center = float2(posX, posY);
float dist = 1.0 - smoothstep(Size, Size + Smooth, length(center - uv));
txt.a *= dist;
return txt;
}
float2 PositionUV(float2 uv, float offsetx, float offsety)
{
uv += float2(offsetx, offsety);
return uv;
}

float2 SimpleDisplacementUV(float2 uv,float x, float y, float value)
{
return lerp(uv,uv+float2(x,y),value);
}
float2 AnimatedInfiniteZoomUV(float2 uv, float zoom2, float posx, float posy, float radius, float speed)
{
uv+=float2(posx,posy);
float2 muv = uv;
float atans = (atan2(uv.x - 0.5, uv.y - 0.5) + 3.1415) / (3.1415 * 2.);
float time = _Time * speed*10;
uv -= 0.5;
 uv *= (1. / pow(4., frac(time / 2.)));
uv += 0.5;
float2 tri = abs(1. - (uv * 2.));
 float zoom = min(pow(2., floor(-log2(tri.x))), pow(2., floor(-log2(tri.y))));
 float zoom_id = log2(zoom) + 1.;
 float div = ((pow(2., ((-zoom_id) - 1.)) * ((-2.) + pow(2., zoom_id))));
 float2 uv2 = (((uv) - (div)) * zoom);
 uv2 = lerp(muv * radius, uv2 * radius, zoom2);
 return uv2;
}
float4 Circle_Hole(float4 txt, float2 uv, float posX, float posY, float Size, float Smooth)
{
float2 center = float2(posX, posY);
float dist = 1.0 - smoothstep(Size, Size + Smooth, 1-length(center - uv));
txt.a *= dist;
return txt;
}
float4 frag (v2f i) : COLOR
{
float2 PositionUV_1 = PositionUV(i.texcoord,PositionUV_X_1,PositionUV_Y_1);
float2 AnimatedTwistUV_1 = AnimatedTwistUV(PositionUV_1,AnimatedTwistUV_AnimatedTwistUV_Bend_1,AnimatedTwistUV_AnimatedTwistUV_PosX_1,AnimatedTwistUV_AnimatedTwistUV_PosY_1,AnimatedTwistUV_AnimatedTwistUV_Radius_1,AnimatedTwistUV_AnimatedTwistUV_Speed_1);
float2 AnimatedInfiniteZoomUV_1 = AnimatedInfiniteZoomUV(AnimatedTwistUV_1,AnimatedInfiniteZoomUV_Zoom_1,AnimatedInfiniteZoomUV_PosX_1,AnimatedInfiniteZoomUV_PosY_1,AnimatedInfiniteZoomUV_Intensity_1,AnimatedInfiniteZoomUV_Speed_1);
float4 NewTex_1 = tex2D(_NewTex_1,AnimatedInfiniteZoomUV_1);
float4 _CircleFade_1 = Circle_Fade(NewTex_1,PositionUV_1,_CircleFade_PosX_1,_CircleFade_PosY_1,_CircleFade_Size_1,_CircleFade_Dist_1);
float4 _CircleHole_1 = Circle_Hole(_CircleFade_1,PositionUV_1,_CircleHole_PosX_1,_CircleHole_PosY_1,_CircleHole_Size_1,_CircleHole_Dist_1);
float2 _Simple_Displacement_1 = SimpleDisplacementUV(i.texcoord,_CircleHole_1.r*_CircleHole_1.a,_CircleHole_1.g*_CircleHole_1.a,_Simple_Displacement_Value_1);
float4 _MainTex_1 = tex2D(_MainTex,_Simple_Displacement_1);
_MainTex_1 = lerp(_MainTex_1,_MainTex_1*_MainTex_1.a + _CircleHole_1*_CircleHole_1.a,_Add_Fade_1 * _CircleHole_1.a);
float4 FinalResult = _MainTex_1;
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
