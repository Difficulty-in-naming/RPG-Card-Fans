//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/orb"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
_NewTex_1("NewTex_1(RGB)", 2D) = "white" { }
_DisplacementPack_ValueX_1("_DisplacementPack_ValueX_1", Range(-1, 1)) = 0
_DisplacementPack_ValueY_1("_DisplacementPack_ValueY_1", Range(-1, 1)) = -0.374
_DisplacementPack_Size_1("_DisplacementPack_Size_1", Range(-3, 3)) = 3
DisplacementPack_1("DisplacementPack_1(RGB)", 2D) = "white" { }
_Simple_Displacement_Rotative_Value_1("_Simple_Displacement_Rotative_Value_1", Range(-0.3, 0.3)) = -0.11
_Simple_Displacement_Rotative_Rotation_1("_Simple_Displacement_Rotative_Rotation_1", Range(-1, 1)) = -0.239
_ShadowLight_Precision_1("_ShadowLight_Precision_1", Range(1, 32)) = 10.774
_ShadowLight_Size_1("_ShadowLight_Size_1", Range(0, 16)) = 1.102
_ShadowLight_Color_1("_ShadowLight_Color_1", COLOR) = (1,0.7728195,0.1764706,1)
_ShadowLight_Intensity_1("_ShadowLight_Intensity_1", Range(0, 4)) = 1.433
_ShadowLight_PosX_1("_ShadowLight_PosX_1", Range(-1, 1)) = 0
_ShadowLight_PosY_1("_ShadowLight_PosY_1", Range(-1, 1)) = -0.069
_ShadowLight_NoSprite_1("_ShadowLight_NoSprite_1", Range(0, 1)) = 0
_PremadeGradients_Offset_1("_PremadeGradients_Offset_1", Range(-1, 1)) =0
_PremadeGradients_Fade_1("_PremadeGradients_Fade_1", Range(0, 1)) =1
_PremadeGradients_Speed_1("_PremadeGradients_Speed_1", Range(-2, 2)) =0.496
_LerpUV_Fade_1("_LerpUV_Fade_1", Range(0, 1)) = 0.097
_OperationBlend_Fade_2("_OperationBlend_Fade_2", Range(0, 1)) = 1
_ShinyFX_Pos_1("_ShinyFX_Pos_1", Range(-1, 1)) = -0.07
_ShinyFX_Size_1("_ShinyFX_Size_1", Range(-1, 1)) = -0.092
_ShinyFX_Smooth_1("_ShinyFX_Smooth_1", Range(0, 1)) = 0.25
_ShinyFX_Intensity_1("_ShinyFX_Intensity_1", Range(0, 4)) = 1.218
_ShinyFX_Speed_1("_ShinyFX_Speed_1", Range(0, 8)) = 1.407
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
sampler2D _NewTex_1;
float _DisplacementPack_ValueX_1;
float _DisplacementPack_ValueY_1;
float _DisplacementPack_Size_1;
sampler2D DisplacementPack_1;
float _Simple_Displacement_Rotative_Value_1;
float _Simple_Displacement_Rotative_Rotation_1;
float _ShadowLight_Precision_1;
float _ShadowLight_Size_1;
float4 _ShadowLight_Color_1;
float _ShadowLight_Intensity_1;
float _ShadowLight_PosX_1;
float _ShadowLight_PosY_1;
float _ShadowLight_NoSprite_1;
float _PremadeGradients_Offset_1;
float _PremadeGradients_Fade_1;
float _PremadeGradients_Speed_1;
float _LerpUV_Fade_1;
float _OperationBlend_Fade_2;
float _ShinyFX_Pos_1;
float _ShinyFX_Size_1;
float _ShinyFX_Smooth_1;
float _ShinyFX_Intensity_1;
float _ShinyFX_Speed_1;
float _OperationBlend_Fade_1;

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
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
float2 SimpleDisplacementRotativeUV(float2 uv, float4 rgba, float value, float value2)
{
float angle = value2 * 3.1415926;
float dist = rgba.r;
#define rot(n) mul(n, float2x2(cos(angle), -sin(angle), sin(angle), cos(angle)))
float2 uv2 = uv+rot(float2(dist-0.5, dist-0.5));
return lerp(uv, uv2, value);
}
float4 OperationBlend(float4 origin, float4 overlay, float blend)
{
float4 o = origin; 
o.a = overlay.a + origin.a * (1 - overlay.a);
o.rgb = (overlay.rgb * overlay.a + origin.rgb * origin.a * (1 - overlay.a)) * (o.a+0.0000001);
o.a = saturate(o.a);
o = lerp(origin, o, blend);
return o;
}
float4 Color_PreGradients(float4 rgba, float4 a, float4 b, float4 c, float4 d, float offset, float fade, float speed)
{
float gray = (rgba.r + rgba.g + rgba.b) / 3;
gray += offset+(speed*_Time*20);
float4 result = a + b * cos(6.28318 * (c * gray + d));
result.a = rgba.a;
result.rgb = lerp(rgba.rgb, result.rgb, fade);
return result;
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
float4 ShadowLight(sampler2D source, float2 uv, float precision, float size, float4 color, float intensity, float posx, float posy,float fade)
{
int samples = precision;
int samples2 = samples *0.5;
float4 ret = float4(0, 0, 0, 0);
float count = 0;
for (int iy = -samples2; iy < samples2; iy++)
{
for (int ix = -samples2; ix < samples2; ix++)
{
float2 uv2 = float2(ix, iy);
uv2 /= samples;
uv2 *= size*0.1;
uv2 += float2(-posx,posy);
uv2 = saturate(uv+uv2);
ret += tex2D(source, uv2);
count++;
}
}
ret = lerp(float4(0, 0, 0, 0), ret / count, intensity);
ret.rgb = color.rgb;
float4 m = ret;
float4 b = tex2D(source, uv);
ret = lerp(ret, b, b.a);
ret = lerp(m,ret,fade);
return ret;
}
float4 ShinyFX(float4 txt, float2 uv, float pos, float size, float smooth, float intensity, float speed)
{
pos = pos + 0.5+sin(_Time*20*speed)*0.5;
uv = uv - float2(pos, 0.5);
float a = atan2(uv.x, uv.y) + 1.4, r = 3.1415;
float d = cos(floor(0.5 + a / r) * r - a) * length(uv);
float dist = 1.0 - smoothstep(size, size + smooth, d);
txt.rgb += dist*intensity;
return txt;
}
float4 frag (v2f i) : COLOR
{
float4 NewTex_1 = tex2D(_NewTex_1, i.texcoord);
float4 _DisplacementPack_1 = DisplacementPack(i.texcoord,DisplacementPack_1,_DisplacementPack_ValueX_1,_DisplacementPack_ValueY_1,_DisplacementPack_Size_1,1,1);
float2 _Simple_Displacement_Rotative_1 = SimpleDisplacementRotativeUV(i.texcoord,_DisplacementPack_1,_Simple_Displacement_Rotative_Value_1,_Simple_Displacement_Rotative_Rotation_1);
float4 _ShadowLight_1 = ShadowLight(_MainTex,_Simple_Displacement_Rotative_1,_ShadowLight_Precision_1,_ShadowLight_Size_1,_ShadowLight_Color_1,_ShadowLight_Intensity_1,_ShadowLight_PosX_1,_ShadowLight_PosY_1,_ShadowLight_NoSprite_1);
float4 _PremadeGradients_1 = Color_PreGradients(_ShadowLight_1,float4(0.5,0.5,0.5,1),float4(0.5,0.5,0.5,1),float4(0.8,0.8,0.8,1),float4(0,0.33,0.67,1),_PremadeGradients_Offset_1,_PremadeGradients_Fade_1,_PremadeGradients_Speed_1);
i.texcoord = lerp(i.texcoord,_Simple_Displacement_Rotative_1,_LerpUV_Fade_1);
float4 SourceRGBA_1 = tex2D(_MainTex, i.texcoord);
float4 OperationBlend_2 = OperationBlend(_PremadeGradients_1, SourceRGBA_1, _OperationBlend_Fade_2); 
float4 _ShinyFX_1 = ShinyFX(OperationBlend_2,i.texcoord,_ShinyFX_Pos_1,_ShinyFX_Size_1,_ShinyFX_Smooth_1,_ShinyFX_Intensity_1,_ShinyFX_Speed_1);
float4 OperationBlend_1 = OperationBlend(NewTex_1, _ShinyFX_1, _OperationBlend_Fade_1); 
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
