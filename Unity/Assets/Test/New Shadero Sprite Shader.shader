//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/New Shadero Sprite Shader"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
_InnerGlowHQ_Intensity_1("_InnerGlowHQ_Intensity_1", Range(1, 16)) = 2
_InnerGlowHQ_Size_1("_InnerGlowHQ_Size_1", Range(1, 16)) = 3
_InnerGlowHQ_Color_1("_InnerGlowHQ_Color_1", COLOR) = (1,1,0,1)
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
float _InnerGlowHQ_Intensity_1;
float _InnerGlowHQ_Size_1;
float4 _InnerGlowHQ_Color_1;

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
}


float2 OffsetUV(float2 uv, float offsetx, float offsety, float zoomx, float zoomy)
{
uv += float2(offsetx, offsety);
uv = fmod(uv * float2(zoomx, zoomy), 1);
return uv;
}

float2 OffsetUVClamp(float2 uv, float offsetx, float offsety, float zoomx, float zoomy)
{
uv += float2(offsetx, offsety);
uv = fmod(clamp(uv * float2(zoomx, zoomy), 0.0001, 0.9999), 1);
return uv;
}
float2 ZoomUV(float2 uv, float zoom, float posx, float posy)
{
float2 center = float2(posx, posy);
uv -= center;
uv = uv * zoom;
uv += center;
return uv;
}
float Generate_Fire_hash2D(float2 x)
{
return frac(sin(dot(x, float2(13.454, 7.405)))*12.3043);
}

float Generate_Fire_voronoi2D(float2 uv, float precision)
{
float2 fl = floor(uv);
float2 fr = frac(uv);
float res = 1.0;
for (int j = -1; j <= 1; j++)
{
for (int i = -1; i <= 1; i++)
{
float2 p = float2(i, j);
float h = Generate_Fire_hash2D(fl + p);
float2 vp = p - fr + h;
float d = dot(vp, vp);
res += 1.0 / pow(d, 8.0);
}
}
return pow(1.0 / res, precision);
}

float4 Generate_Fire(float2 uv, float posX, float posY, float precision, float smooth, float speed, float black)
{
uv += float2(posX, posY);
float t = _Time*60*speed;
float up0 = Generate_Fire_voronoi2D(uv * float2(6.0, 4.0) + float2(0, -t), precision);
float up1 = 0.5 + Generate_Fire_voronoi2D(uv * float2(6.0, 4.0) + float2(42, -t ) + 30.0, precision);
float finalMask = up0 * up1  + (1.0 - uv.y);
finalMask += (1.0 - uv.y)* 0.5;
finalMask *= 0.7 - abs(uv.x - 0.5);
float4 result = smoothstep(smooth, 0.95, finalMask);
result.a = saturate(result.a + black);
return result;
}
float4 PatternMovement(float2 uv, sampler2D source, float4 rgba, float posx, float posy, float speed)
{
float t = _Time * 20 * speed;
uv = fmod(abs(uv+float2(posx*t, posy*t)),1);
float4 result = tex2D(source, uv);
result.a = result.a * rgba.a;
return result;
}

float4 TurnAlphaToBlack(float4 txt,float fade)
{
float3 gs = lerp(txt.rgb,float3(0,0,0), 1-txt.a);
return lerp(txt,float4(gs, 1), fade);
}

float2 ResizeUV(float2 uv, float offsetx, float offsety, float zoomx, float zoomy)
{
uv += float2(offsetx, offsety);
uv = fmod(uv * float2(zoomx*zoomx, zoomy*zoomy), 1);
return uv;
}

float2 ResizeUVClamp(float2 uv, float offsetx, float offsety, float zoomx, float zoomy)
{
uv += float2(offsetx, offsety);
uv = fmod(clamp(uv * float2(zoomx*zoomx, zoomy*zoomy), 0.0001, 0.9999), 1);
return uv;
}
float2 SpriteSheetFrame(float2 uv, float size, float frame)
{
frame = int(frame);
uv /= size;
uv.x += fmod(frame,size) / size;
uv.y -=1/size;
uv.y += 1-floor(frame / size) / size;
return uv;
}
float InnerGlowAlpha(sampler2D source, float2 uv)
{
return (1 - tex2D(source, uv).a);
}
float4 InnerGlow(float2 uv, sampler2D source, float Intensity, float size, float4 color)
{
float step1 = 0.00390625f * size*2;
float step2 = step1 * 2;
float4 result = float4 (0, 0, 0, 0);
float2 texCoord = float2(0, 0);
texCoord = uv + float2(-step2, -step2); result += InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step1, -step2); result += 4.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(0, -step2); result += 6.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step1, -step2); result += 4.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step2, -step2); result += InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step2, -step1); result += 4.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step1, -step1); result += 16.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(0, -step1); result += 24.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step1, -step1); result += 16.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step2, -step1); result += 4.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step2, 0); result += 6.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step1, 0); result += 24.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv; result += 36.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step1, 0); result += 24.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step2, 0); result += 6.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step2, step1); result += 4.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step1, step1); result += 16.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(0, step1); result += 24.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step1, step1); result += 16.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step2, step1); result += 4.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step2, step2); result += InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(-step1, step2); result += 4.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(0, step2); result += 6.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step1, step2); result += 4.0 * InnerGlowAlpha(source, texCoord);
texCoord = uv + float2(step2, step2); result += InnerGlowAlpha(source, texCoord);
result = result*0.00390625;
result = lerp(tex2D(source,uv),color*Intensity,result*color.a);
result.a = tex2D(source, uv).a;
return saturate(result);
}
float4 frag (v2f i) : COLOR
{
float4 _InnerGlowHQ_1 = InnerGlow(i.texcoord,_MainTex,_InnerGlowHQ_Intensity_1,_InnerGlowHQ_Size_1,_InnerGlowHQ_Color_1);
float4 FinalResult = _InnerGlowHQ_1;
FinalResult.rgb *= i.color.rgb;
FinalResult.a = FinalResult.a * _SpriteFade * i.color.a;
return FinalResult;
}

ENDCG
}
}
Fallback "Sprites/Default"
}
