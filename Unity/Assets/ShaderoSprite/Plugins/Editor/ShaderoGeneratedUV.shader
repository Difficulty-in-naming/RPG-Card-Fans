//////////////////////////////////////////////////////////////
/// Shadero Sprite: Sprite Shader Editor - by VETASOFT 2020 //
/// Shader generate with Shadero 1.9.9                      //
/// http://u3d.as/V7t #AssetStore                           //
/// http://www.shadero.com #Docs                            //
//////////////////////////////////////////////////////////////

Shader "Shadero Previews/GeneratedUV"
{
	Properties
	{
		[PerRendererData] _MainTex("Sprite Texture", 2D) = "white" {}
		px1("px1", Range(0, 1)) = 0.42
		py1("py1", Range(0, 1)) = 0.2
		px2("px2", Range(0, 1)) = 0.6
		py2("py2", Range(0, 1)) = 0.4

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

		Tags{ "Queue" = "Transparent" "IgnoreProjector" = "true" "RenderType" = "Transparent" "PreviewType" = "Plane" "CanUseSpriteAtlas" = "True" }
		ZWrite Off Blend SrcAlpha OneMinusSrcAlpha Cull Off

		// required for UI.Mask
		Stencil
	{
		Ref[_Stencil]
		Comp[_StencilComp]
		Pass[_StencilOp]
		ReadMask[_StencilReadMask]
		WriteMask[_StencilWriteMask]
	}

		Pass
	{

		CGPROGRAM
#pragma vertex vert
#pragma fragment frag
#pragma fragmentoption ARB_precision_hint_fastest
#include "UnityCG.cginc"

		struct appdata_t {
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
	float px1;
	float py1;
	float px2;
	float py2;
	float _SpriteFade;

	v2f vert(appdata_t IN)
	{
		v2f OUT;
		OUT.vertex = UnityObjectToClipPos(IN.vertex);
		OUT.texcoord = IN.texcoord;
		OUT.color = IN.color;
		return OUT;
	}

	float4 rectangle(float2 uv, float2 pos, float width, float height, float4 color) 
	{
		if ((uv.x > pos.x) && (uv.x < width)
			&& (uv.y > pos.y) && (uv.y < height))
		{
			float sx = px2 - px1;
			float sy = py2 - py1;
			color.r = lerp(0, 1, (uv.x - px1) / sx);
			color.g = lerp(0, 1, (uv.y - py1) / sy);
			color.b = 0.0;
			color.a = 1;
		}
		return color;
	}

	float4 frag(v2f i) : COLOR
	{
		float4 _MainTex_1 = tex2D(_MainTex, i.texcoord);
		float2 uv = i.texcoord;
		float4 FinalResult = _MainTex_1;
		FinalResult = rectangle(uv, float2(px1, py1), px2, py2, _MainTex_1);	
		return FinalResult;
	}

		ENDCG
	}
	}
		Fallback "Sprites/Default"
}
