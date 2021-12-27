//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/CircleProgressBar"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
_FillColor_Color_1("_FillColor_Color_1", COLOR) = (0.2794118,1,0,1)
_PlasmaFX_Fade_1("_PlasmaFX_Fade_1", Range(0, 1)) = 0.151
_PlasmaFX_Speed_1("_PlasmaFX_Speed_1", Range(0, 1)) = 0.745
_NewTex_1("NewTex_1(RGB)", 2D) = "white" { }
_Generate_Donut_PosX_1("_Generate_Donut_PosX_1", Range(-1, 2)) = 0.5
_Generate_Donut_PosY_1("_Generate_Donut_PosY_1", Range(-1, 2)) = 0.5
_Generate_Donut_Size_1("_Generate_Donut_Size_1", Range(-2, 2)) = 0.618
_Generate_Donut_SizeDonut_1("_Generate_Donut_SizeDonut_1", Range(-2, 2)) = -0.582
_Generate_Donut_SizeSmooth_1("_Generate_Donut_SizeSmooth_1", Range(0, 1)) = 0.159
_MaskRGBA_Fade_1("_MaskRGBA_Fade_1", Range(0, 1)) = 0
_ThresholdSmooth_Value_1("_ThresholdSmooth_Value_1", Range(-1, 2)) = -0.9
_ThresholdSmooth_Smooth_1("_ThresholdSmooth_Smooth_1", Range(0, 1)) = 0.025
_TurnAlphaToBlack_Fade_1("_TurnAlphaToBlack_Fade_1", Range(0, 1)) = 1
_MaskRGBA_Fade_2("_MaskRGBA_Fade_2", Range(0, 1)) = 0
PolarCoordinatesUV_Size_1("PolarCoordinatesUV_Size_1", Range(0, 0.5)) = 0.317
_DisplacementPack_ValueX_1("_DisplacementPack_ValueX_1", Range(-1, 1)) = -0.051
_DisplacementPack_ValueY_1("_DisplacementPack_ValueY_1", Range(-1, 1)) = 0
_DisplacementPack_Size_1("_DisplacementPack_Size_1", Range(-3, 3)) = 1.946
DisplacementPack_1("DisplacementPack_1(RGB)", 2D) = "white" { }
_Add_Fade_1("_Add_Fade_1", Range(0, 4)) = 0.465
_RGBA_Mul_Fade_1("_RGBA_Mul_Fade_1", Range(0, 2)) = 1.275
_OperationBlend_Fade_1("_OperationBlend_Fade_1", Range(0, 1)) = 1
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
float4 _FillColor_Color_1;
float _PlasmaFX_Fade_1;
float _PlasmaFX_Speed_1;
sampler2D _NewTex_1;
float _Generate_Donut_PosX_1;
float _Generate_Donut_PosY_1;
float _Generate_Donut_Size_1;
float _Generate_Donut_SizeDonut_1;
float _Generate_Donut_SizeSmooth_1;
float _MaskRGBA_Fade_1;
float _ThresholdSmooth_Value_1;
float _ThresholdSmooth_Smooth_1;
float _TurnAlphaToBlack_Fade_1;
float _MaskRGBA_Fade_2;
float PolarCoordinatesUV_Size_1;
float _DisplacementPack_ValueX_1;
float _DisplacementPack_ValueY_1;
float _DisplacementPack_Size_1;
sampler2D DisplacementPack_1;
float _Add_Fade_1;
float _RGBA_Mul_Fade_1;
float _OperationBlend_Fade_1;

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
}


float4 UniColor(float4 txt, float4 color)
{
txt.rgb = lerp(txt.rgb,color.rgb,color.a);
return txt;
}
inline float RBFXmod(float x,float modu)
{
return x - floor(x * (1.0 / modu)) * modu;
}

float3 RBFXrainbow(float t)
{
t= RBFXmod(t,1.0);
float tx = t * 8;
float r = clamp(tx - 4.0, 0.0, 1.0) + clamp(2.0 - tx, 0.0, 1.0);
float g = tx < 2.0 ? clamp(tx, 0.0, 1.0) : clamp(4.0 - tx, 0.0, 1.0);
float b = tx < 4.0 ? clamp(tx - 2.0, 0.0, 1.0) : clamp(6.0 - tx, 0.0, 1.0);
return float3(r, g, b);
}

float4 Plasma(float4 txt, float2 uv, float _Fade, float speed)
{
float _TimeX=_Time.y * speed;
float a = 1.1 + _TimeX * 2.25;
float b = 0.5 + _TimeX * 1.77;
float c = 8.4 + _TimeX * 1.58;
float d = 610 + _TimeX * 2.03;
float x1 = 2.0 * uv.x;
float n = sin(a + x1) + sin(b - x1) + sin(c + 2.0 * uv.y) + sin(d + 5.0 * uv.y);
n = RBFXmod(((5.0 + n) / 5.0), 1.0);
float4 nx=txt;
n += nx.r * 0.2 + nx.g * 0.4 + nx.b * 0.2;
float4 ret=float4(RBFXrainbow(n),txt.a);
return lerp(txt,ret,_Fade);
}
float2 PolarCoordinatesUV(float2 uv, float size)
{
float2 r = uv - float2(0.5, 0.5);
uv.y = sqrt(r.x * r.x + r.y * r.y);
uv.y /= 0.318471;
uv.y = 1.0 - uv.y;
uv.x = atan2(r.y, r.x);
uv.x -= 1.57079632679;
if (uv.x < 0.0) { uv.x += 6.28318530718; }
uv.x /= 6.28318530718;
uv.x = 1.0 - uv.x;
return uv;
}
float4 ThresholdSmooth(float4 txt, float value, float smooth)
{
float l = (txt.x + txt.y + txt.z) * 0.33;
txt.rgb = smoothstep(value, value + smooth, l);
return txt;
}
float4 OperationBlend(float4 origin, float4 overlay, float blend)
{
float4 o = origin; 
o.a = overlay.a + origin.a * (1 - overlay.a);
o.rgb = (overlay.rgb * overlay.a + origin.rgb * origin.a * (1 - overlay.a)) / (o.a+0.0000001);
o.a = saturate(o.a);
o = lerp(origin, o, blend);
return o;
}

float4 TurnAlphaToBlack(float4 txt,float fade)
{
float3 gs = lerp(txt.rgb,float3(0,0,0), 1-txt.a);
return lerp(txt,float4(gs, 1), fade);
}

float4 Generate_Donut(float2 uv, float posx, float posy, float size, float sizedonut, float smooth, float black)
{
uv -= float2(posx, posy);
float l = length(uv*2);
float4 d = smoothstep(size, size + smooth, l);
d *= smoothstep(size+sizedonut, size + sizedonut + smooth, 1-l);
d.a = saturate(d + black);
return d;
}
float4 DisplacementPack(float2 uv,sampler2D source,float x, float y, float value, float motion, float motion2)
{
float t=_Time.y;
float2 mov =float2(x*t,y*t)*motion;
float2 mov2 =float2(x*t*2,y*t*2)*motion2;
float4 rgba=tex2D(source, uv + mov);
float4 rgba2=tex2D(source, uv + mov2);
float r=(rgba2.r+rgba2.g+rgba2.b)/3;
r*=rgba2.a;
uv+=mov2*0.25;
return tex2D(source,lerp(uv,uv+float2(rgba.r*x,rgba.g*y),value*r));
}
float4 frag (v2f i) : COLOR
{
float4 FillColor_1 = UniColor(float4(0,0,0,1),_FillColor_Color_1);
float4 _PlasmaFX_1 = Plasma(FillColor_1,i.texcoord,_PlasmaFX_Fade_1,_PlasmaFX_Speed_1);
float4 NewTex_1 = tex2D(_NewTex_1, i.texcoord);
float4 _Generate_Donut_1 = Generate_Donut(i.texcoord,_Generate_Donut_PosX_1,_Generate_Donut_PosY_1,_Generate_Donut_Size_1,_Generate_Donut_SizeDonut_1,_Generate_Donut_SizeSmooth_1,1);
NewTex_1.a = lerp(_Generate_Donut_1.r, 1 - _Generate_Donut_1.r ,_MaskRGBA_Fade_1);
float4 _ThresholdSmooth_1 = ThresholdSmooth(NewTex_1,_ThresholdSmooth_Value_1,_ThresholdSmooth_Smooth_1);
float4 TurnAlphaToBlack_1 = TurnAlphaToBlack(_ThresholdSmooth_1,_TurnAlphaToBlack_Fade_1);
_PlasmaFX_1.a = lerp(TurnAlphaToBlack_1.r, 1 - TurnAlphaToBlack_1.r ,_MaskRGBA_Fade_2);
float2 PolarCoordinatesUV_1 = PolarCoordinatesUV(i.texcoord,PolarCoordinatesUV_Size_1);
float4 _DisplacementPack_1 = DisplacementPack(PolarCoordinatesUV_1,DisplacementPack_1,_DisplacementPack_ValueX_1,_DisplacementPack_ValueY_1,_DisplacementPack_Size_1,1,1);
_PlasmaFX_1 = lerp(_PlasmaFX_1,_PlasmaFX_1*_PlasmaFX_1.a + _DisplacementPack_1*_DisplacementPack_1.a,_Add_Fade_1 * _PlasmaFX_1.a);
_PlasmaFX_1.rgba *= _RGBA_Mul_Fade_1;
float4 _MainTex_1 = tex2D(_MainTex, i.texcoord);
float4 OperationBlend_1 = OperationBlend(_PlasmaFX_1, _MainTex_1, _OperationBlend_Fade_1); 
float4 FinalResult = OperationBlend_1;
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
