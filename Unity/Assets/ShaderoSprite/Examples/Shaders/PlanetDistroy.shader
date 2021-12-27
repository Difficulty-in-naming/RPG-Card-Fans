//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/PlanetDistroy"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
_Generate_Circle_PosX_1("_Generate_Circle_PosX_1", Range(-1, 2)) = 0.5
_Generate_Circle_PosY_1("_Generate_Circle_PosY_1", Range(-1, 2)) = 0.5
_Generate_Circle_Size_1("_Generate_Circle_Size_1", Range(-1, 1)) = 0.371
_Generate_Circle_Dist_1("_Generate_Circle_Dist_1", Range(0, 1)) = 0.01
_HdrCreate_Value_1("_HdrCreate_Value_1", Range(0, 4)) = 1.857
_Generate_3DPlanet_RotationY_1("_Generate_3DPlanet_RotationY_1", Range(-4, 4)) = 0.199
_Generate_3DPlanet_RotationX_1("_Generate_3DPlanet_RotationX_1", Range(-4, 4)) = -0.114
_Generate_3DPlanet_LightDirection_X_1("_Generate_3DPlanet_LightDirection_X_1", Range(-4, 4)) = -3.386
_Generate_3DPlanet_LightDirection_Y_1("_Generate_3DPlanet_LightDirection_Y_1", Range(-4, 4)) = -4
_Generate_3DPlanet_LightDirection_Z_1("_Generate_3DPlanet_LightDirection_Z_1", Range(-4, 4)) = 3.7
_Generate_3DPlanet_Light_Color_1("_Generate_3DPlanet_Light_Color_1", COLOR) = (0.4019023,0.6871058,0.630349,0.047)
_Generate_3DPlanet_Speed_1("_Generate_3DPlanet_Speed_1", Range(-8, 8)) = -0.585
_Generate_3DPlanet_HaloIntensity_1("_Generate_3DPlanet_HaloIntensity_1", Range(0, 1)) = 0.822
_Generate_3DPlanet_HaloSize_1("_Generate_3DPlanet_HaloSize_1", Range(-0.05, 0.05)) = -0.011
_Generate_3DPlanet_HaloColor_1("_Generate_3DPlanet_HaloColor_1", COLOR) = (0.4279171,0.8002685,0.2096599,0.347)
_Generate_3DPlanet_InsideShadow_1("_Generate_3DPlanet_InsideShadow_1", Range(-1, 1)) = 0.029
_Generate_3DPlanet_StrangeX_1("_Generate_3DPlanet_StrangeX_1", Range(-2, 2)) = -0.259
_Generate_3DPlanet_StrangeY_1("_Generate_3DPlanet_StrangeY_1", Range(-2, 2)) = 0.126
_Generate_3DPlanet_CloudVolume_1("_Generate_3DPlanet_CloudVolume_1", Range(-0.1, 1.1)) = 0.455
_Generate_3DPlanet_CloudIntensity_1("_Generate_3DPlanet_CloudIntensity_1", Range(-2, 2)) = -0.212
_Generate_3DPlanet_CloudDistortion_1("_Generate_3DPlanet_CloudDistortion_1", Range(-2, 8)) = -0.587
_Generate_3DPlanet_CloudColor_1("_Generate_3DPlanet_CloudColor_1", COLOR) = (0.8592191,0.4419876,0.9869254,0.08841157)
_Destroyer_Value_1("_Destroyer_Value_1", Range(0, 1)) = 0
_Destroyer_Speed_1("_Destroyer_Speed_1", Range(0, 1)) =  0.5
_OperationBlend_Fade_1("_OperationBlend_Fade_1", Range(0, 1)) = 1
_Destroyer_Value_2("_Destroyer_Value_2", Range(0, 1)) = 0
_Destroyer_Speed_2("_Destroyer_Speed_2", Range(0, 1)) =  0.5
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
float _Generate_Circle_PosX_1;
float _Generate_Circle_PosY_1;
float _Generate_Circle_Size_1;
float _Generate_Circle_Dist_1;
float _HdrCreate_Value_1;
float _Generate_3DPlanet_RotationY_1;
float _Generate_3DPlanet_RotationX_1;
float _Generate_3DPlanet_LightDirection_X_1;
float _Generate_3DPlanet_LightDirection_Y_1;
float _Generate_3DPlanet_LightDirection_Z_1;
float4 _Generate_3DPlanet_Light_Color_1;
float _Generate_3DPlanet_Speed_1;
float _Generate_3DPlanet_HaloIntensity_1;
float _Generate_3DPlanet_HaloSize_1;
float4 _Generate_3DPlanet_HaloColor_1;
float _Generate_3DPlanet_InsideShadow_1;
float _Generate_3DPlanet_StrangeX_1;
float _Generate_3DPlanet_StrangeY_1;
float _Generate_3DPlanet_CloudVolume_1;
float _Generate_3DPlanet_CloudIntensity_1;
float _Generate_3DPlanet_CloudDistortion_1;
float4 _Generate_3DPlanet_CloudColor_1;
float _Destroyer_Value_1;
float _Destroyer_Speed_1;
float _OperationBlend_Fade_1;
float _Destroyer_Value_2;
float _Destroyer_Speed_2;

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
}


float DSFXr (float2 c, float seed)
{
return frac(43.*sin(c.x+7.*c.y)*seed);
}

float DSFXn (float2 p, float seed)
{
float2 i = floor(p), w = p-i, j = float2 (1.,0.);
w = w*w*(3.-w-w);
return lerp(lerp(DSFXr(i, seed), DSFXr(i+j, seed), w.x), lerp(DSFXr(i+j.yx, seed), DSFXr(i+1., seed), w.x), w.y);
}

float DSFXa (float2 p, float seed)
{
float m = 0., f = 2.;
for ( int i=0; i<9; i++ ){ m += DSFXn(f*p, seed)/f; f+=f; }
return m;
}

float4 DestroyerFX(float4 txt, float2 uv, float value, float seed, float HDR)
{
float t = frac(value*0.9999);
float4 c = smoothstep(t / 1.2, t + .1, DSFXa(3.5*uv, seed));
c = txt*c;
c.r = lerp(c.r, c.r*120.0*(1 - c.a), value);
c.g = lerp(c.g, c.g*40.0*(1 - c.a), value);
c.b = lerp(c.b, c.b*5.0*(1 - c.a) , value);
c.rgb = lerp(saturate(c.rgb),c.rgb,HDR);
return c;
}
float4 Generate_Circle(float2 uv, float posX, float posY, float Size, float Smooth, float black)
{
float2 center = float2(posX, posY);
float dist = 1.0 - smoothstep(Size, Size + Smooth, length(center - uv));
float4 result = float4(1,1,1,dist);
if (black == 1) result = float4(dist, dist, dist, 1);
return result;
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
float4 HdrCreate(float4 txt,float value)
{
if (txt.r>0.98) txt.r=2;
if (txt.g>0.98) txt.g=2;
if (txt.b>0.98) txt.b=2;
return lerp(saturate(txt),txt, value);
}
float4 Generate_3DPlanet(sampler2D txt, float2 uvx, float2 uv, float2 speed, float3 lightDir, float4 lightColor, float speed2, float halointensity, float halosize, float4 halocolor, float InsideShadow, float Distx, float Disty, float ColorGrad, float ColorGradIntensity, float ColorTurn, float4 ColorAmbiant)
{
speed *= _Time * speed2;
float3 pos = float3(uv - float2(0.5, 0.5), 0);
float3 pos2 = float3(uvx-float2(0.5,0.5), 0);
float z_Square =0.15 - dot(pos2.xy, pos2.xy);
float zs = z_Square+0.1;
zs = max(zs+ halosize-0.05, 0)*12;
if (z_Square <= .0) return float4(halocolor.r, halocolor.g, halocolor.b, zs*halointensity*4*halocolor.a);
zs=saturate(zs);
pos.z = sqrt(z_Square);
float3 normalDir = normalize(pos);
pos = mul(pos, float3x3(cos(speed.y), sin(speed.y) * sin(speed.x), sin(speed.y) * cos(speed.x), 0,
cos(speed.x), -sin(speed.x), -sin(speed.y), cos(speed.y) * sin(speed.x), cos(speed.y) * cos(speed.x)));
float lon = atan(pos.x / pos.z);
lon -= 3.1415926 * step(pos.z, .0);
float lat = acos(pos.y/0.4);
float2 uv2 = float2(lon, lat) / float2(3.1415926, -3.1415926);
float2 uv3 = uv2;
uv3.x = sin(uv3.x*3.1416)*ColorTurn;
float2 px = uv3 * float2(2.025, 20.025) + float2(0, 0.12);
float p_x = px.x;
float p_y = px.y;
float a_x = Distx;
float a_y = Disty;
for (int i = 1; i<8; i++) {
float float_i = float(i);
px.x += Distx*sin(float_i*px.y + _Time * speed2*16.0);
px.y += Disty*cos(float_i*px.x); }
px.x = lerp(uv3.x, px.x, ColorGrad);
px.y = lerp(uv3.y, px.y, ColorGrad);
float r = sin(px.y)*.5 + .4;
float g = cos(px.y)*.5 + .7;
float b = cos(px.y)*.5 + .8;
r = cos(px.x + px.y + 1.3)*.5 + .5+ ColorAmbiant.r;
g = sin(px.x + px.y + 2.)*.5 + .5+ ColorAmbiant.g;
b = (sin(px.x + px.y + 1.) + cos(px.x + px.y + 1.))*.25 + .5+ ColorAmbiant.b;
float2 change = lerp(float2(0, 0), float2(r, g), ColorGrad);
float4 emission = tex2D(txt, uv2+ change);
emission.rgb -= z_Square * 32* InsideShadow;
emission.rgb = lerp(emission.rgb, dot(emission.rgb, 0.3)*ColorAmbiant.rgb, ColorAmbiant.a);
float3 diffuse = (lightColor*lightColor.a) * max(0.0, dot(normalDir, lightDir));
float3 specular = lightColor * pow(max(0.0, dot(normalize(pos + lightDir), normalDir)), 3.0);
float3 cloud = saturate(float3(r, g, b));
emission.rgb = lerp(emission.rgb, cloud, dot(cloud,0.3)*ColorGradIntensity);
float3 color = emission.rgb + diffuse + specular;
color = max(color, 0);
return float4(color, emission.a);
}
float4 frag (v2f i) : COLOR
{
float4 _Generate_Circle_1 = Generate_Circle(i.texcoord,_Generate_Circle_PosX_1,_Generate_Circle_PosY_1,_Generate_Circle_Size_1,_Generate_Circle_Dist_1,0);
float4 HdrCreate_1 = HdrCreate(_Generate_Circle_1,_HdrCreate_Value_1);
float4 _Generate_3DPlanet_1 = Generate_3DPlanet(_MainTex,i.texcoord,i.texcoord, float2(_Generate_3DPlanet_RotationY_1,_Generate_3DPlanet_RotationX_1),float3(_Generate_3DPlanet_LightDirection_X_1,_Generate_3DPlanet_LightDirection_Y_1,_Generate_3DPlanet_LightDirection_Z_1),_Generate_3DPlanet_Light_Color_1,_Generate_3DPlanet_Speed_1,_Generate_3DPlanet_HaloIntensity_1,_Generate_3DPlanet_HaloSize_1,_Generate_3DPlanet_HaloColor_1,_Generate_3DPlanet_InsideShadow_1,_Generate_3DPlanet_StrangeX_1,_Generate_3DPlanet_StrangeY_1,_Generate_3DPlanet_CloudVolume_1,_Generate_3DPlanet_CloudIntensity_1,_Generate_3DPlanet_CloudDistortion_1,_Generate_3DPlanet_CloudColor_1);
float4 _Destroyer_1 = DestroyerFX(_Generate_3DPlanet_1,i.texcoord,_Destroyer_Value_1,_Destroyer_Speed_1,1);
float4 OperationBlend_1 = OperationBlend(HdrCreate_1, _Destroyer_1, _OperationBlend_Fade_1); 
float4 _Destroyer_2 = DestroyerFX(OperationBlend_1,i.texcoord,_Destroyer_Value_2,_Destroyer_Speed_2,1);
float4 FinalResult = _Destroyer_2;
FinalResult.rgb *= i.color.rgb;
FinalResult.a = FinalResult.a * _SpriteFade * i.color.a;
return FinalResult;
}

ENDCG
}
}
Fallback "Sprites/Default"
}
