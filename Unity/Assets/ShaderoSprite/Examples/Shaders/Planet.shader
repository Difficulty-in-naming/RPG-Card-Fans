//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Customs/Planet"
{
Properties
{
[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
_Generate_3DPlanet_RotationY_1("_Generate_3DPlanet_RotationY_1", Range(-4, 4)) = 0.133
_Generate_3DPlanet_RotationX_1("_Generate_3DPlanet_RotationX_1", Range(-4, 4)) = 0.101
_Generate_3DPlanet_LightDirection_X_1("_Generate_3DPlanet_LightDirection_X_1", Range(-4, 4)) = -1.147
_Generate_3DPlanet_LightDirection_Y_1("_Generate_3DPlanet_LightDirection_Y_1", Range(-4, 4)) = -1.643
_Generate_3DPlanet_LightDirection_Z_1("_Generate_3DPlanet_LightDirection_Z_1", Range(-4, 4)) = 0.914
_Generate_3DPlanet_Light_Color_1("_Generate_3DPlanet_Light_Color_1", COLOR) = (0.353443,0.538434,0.725597,0.1747127)
_Generate_3DPlanet_Speed_1("_Generate_3DPlanet_Speed_1", Range(-8, 8)) = -0.235
_Generate_3DPlanet_HaloIntensity_1("_Generate_3DPlanet_HaloIntensity_1", Range(0, 1)) = 0.4
_Generate_3DPlanet_HaloSize_1("_Generate_3DPlanet_HaloSize_1", Range(-0.05, 0.05)) = -0.045
_Generate_3DPlanet_HaloColor_1("_Generate_3DPlanet_HaloColor_1", COLOR) = (0.1700116,0.05716026,0.2595478,0.841851)
_Generate_3DPlanet_InsideShadow_1("_Generate_3DPlanet_InsideShadow_1", Range(-1, 1)) = 0.126
_Generate_3DPlanet_StrangeX_1("_Generate_3DPlanet_StrangeX_1", Range(-2, 2)) = 0.297
_Generate_3DPlanet_StrangeY_1("_Generate_3DPlanet_StrangeY_1", Range(-2, 2)) = -0.032
_Generate_3DPlanet_CloudVolume_1("_Generate_3DPlanet_CloudVolume_1", Range(-0.1, 1.1)) = 0.522
_Generate_3DPlanet_CloudIntensity_1("_Generate_3DPlanet_CloudIntensity_1", Range(-2, 2)) = -0.095
_Generate_3DPlanet_CloudDistortion_1("_Generate_3DPlanet_CloudDistortion_1", Range(-2, 8)) = 1.744
_Generate_3DPlanet_CloudColor_1("_Generate_3DPlanet_CloudColor_1", COLOR) = (0.6486502,0.04576898,0.00383091,0.1344416)
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

v2f vert(appdata_t IN)
{
v2f OUT;
OUT.vertex = UnityObjectToClipPos(IN.vertex);
OUT.texcoord = IN.texcoord;
OUT.color = IN.color;
return OUT;
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
float4 _Generate_3DPlanet_1 = Generate_3DPlanet(_MainTex,i.texcoord,i.texcoord, float2(_Generate_3DPlanet_RotationY_1,_Generate_3DPlanet_RotationX_1),float3(_Generate_3DPlanet_LightDirection_X_1,_Generate_3DPlanet_LightDirection_Y_1,_Generate_3DPlanet_LightDirection_Z_1),_Generate_3DPlanet_Light_Color_1,_Generate_3DPlanet_Speed_1,_Generate_3DPlanet_HaloIntensity_1,_Generate_3DPlanet_HaloSize_1,_Generate_3DPlanet_HaloColor_1,_Generate_3DPlanet_InsideShadow_1,_Generate_3DPlanet_StrangeX_1,_Generate_3DPlanet_StrangeY_1,_Generate_3DPlanet_CloudVolume_1,_Generate_3DPlanet_CloudIntensity_1,_Generate_3DPlanet_CloudDistortion_1,_Generate_3DPlanet_CloudColor_1);
float4 FinalResult = _Generate_3DPlanet_1;
FinalResult.rgb *= i.color.rgb;
FinalResult.a = FinalResult.a * _SpriteFade * i.color.a;
return FinalResult;
}

ENDCG
}
}
Fallback "Sprites/Default"
}
