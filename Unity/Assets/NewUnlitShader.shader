Shader "URP/BetterTransparent"
{
    Properties
    {
        _MainTex("MainTex",2D)="White"{}
        _Color("Color",Color)=(1,1,1,1)
        _Brightness ("高亮", Range(1,2)) = 1
		_Cutoff ("Alpha cutoff", Range(0,0.9)) = 0
        _Alpha("Alpha",Range(0,1)) = 1
       	[Enum(UnityEngine.Rendering.CompareFunction)]_StencilComp ("Stencil Comparison", Float) = 8
		_Stencil ("Stencil ID", Float) = 0
		[Enum(UnityEngine.Rendering.StencilOp)]_StencilOp ("Stencil Operation", Float) = 0
		_StencilWriteMask ("Stencil Write Mask", Float) = 255
		_StencilReadMask ("Stencil Read Mask", Float) = 255
    }

    SubShader
    {
        Tags{
        "RenderPipeline"="UniversalRenderPipeline"
        "RenderType"="Opaque"
        "Queue"="Transparent" 
        "IgnoreProjector"="True" 
        "PreviewType" = "Plane"
        }

        Lighting Off
        Cull back
        //Cull off
        Fog {
			Mode Off
		}
		
		ZWrite On
        Stencil
		{
		    Ref [_Stencil]
		    Comp [_StencilComp]
		    Pass [_StencilOp] 
		    ReadMask [_StencilReadMask]
		    WriteMask [_StencilWriteMask]
		}
		Blend SrcAlpha OneMinusSrcAlpha
        HLSLINCLUDE
        #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
        
        TEXTURE2D (_MainTex);
        SAMPLER(sampler_MainTex);
        
        CBUFFER_START(UnityPerMaterial)
        float4 _MainTex_ST;
        half4 _Color;
        half _Cutoff;
        half _Alpha;
        CBUFFER_END

        ENDHLSL
        pass
        {
            HLSLPROGRAM
            #pragma vertex VERT
            #pragma fragment FRAG
            struct a2v
         	{
         	    float4 positionOS:POSITION;
         	    float2 texcoord:TEXCOORD;
         	};
	
         	struct v2f
         	{
         	    float4 positionCS:SV_POSITION;
         	    float2 texcoord:TEXCOORD;
         	};
            v2f VERT(a2v i)
            {
                v2f o;
                o.positionCS=TransformObjectToHClip(i.positionOS.xyz);
                o.texcoord=TRANSFORM_TEX(i.texcoord,_MainTex);
                return o;
            }
            half4 FRAG(v2f i):SV_TARGET
            {
                half4 color=SAMPLE_TEXTURE2D(_MainTex,sampler_MainTex,i.texcoord)*_Color;
            	color.a = _Alpha;
                return color;
            }
            ENDHLSL
        }
    }
}