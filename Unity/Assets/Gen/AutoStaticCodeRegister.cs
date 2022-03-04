﻿namespace PuertsStaticWrap
{
    public static class AutoStaticCodeRegister
    {
        public static void Register(Puerts.JsEnv jsEnv)
        {
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Animator), UnityEngine_Animator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IAnimationClipSource), UnityEngine_IAnimationClipSource_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SharedBetweenAnimatorsAttribute), UnityEngine_SharedBetweenAnimatorsAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.StateMachineBehaviour), UnityEngine_StateMachineBehaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Animation), UnityEngine_Animation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationState), UnityEngine_AnimationState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationEvent), UnityEngine_AnimationEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationClip), UnityEngine_AnimationClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorClipInfo), UnityEngine_AnimatorClipInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorStateInfo), UnityEngine_AnimatorStateInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorTransitionInfo), UnityEngine_AnimatorTransitionInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MatchTargetWeightMask), UnityEngine_MatchTargetWeightMask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorControllerParameter), UnityEngine_AnimatorControllerParameter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorOverrideController), UnityEngine_AnimatorOverrideController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorUtility), UnityEngine_AnimatorUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Avatar), UnityEngine_Avatar_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SkeletonBone), UnityEngine_SkeletonBone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanLimit), UnityEngine_HumanLimit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanBone), UnityEngine_HumanBone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanDescription), UnityEngine_HumanDescription_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AvatarBuilder), UnityEngine_AvatarBuilder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AvatarMask), UnityEngine_AvatarMask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanPose), UnityEngine_HumanPose_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanPoseHandler), UnityEngine_HumanPoseHandler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HumanTrait), UnityEngine_HumanTrait_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Motion), UnityEngine_Motion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RuntimeAnimatorController), UnityEngine_RuntimeAnimatorController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundle), UnityEngine_AssetBundle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleCreateRequest), UnityEngine_AssetBundleCreateRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleManifest), UnityEngine_AssetBundleManifest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleRecompressOperation), UnityEngine_AssetBundleRecompressOperation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleRequest), UnityEngine_AssetBundleRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssetBundleUnloadOperation), UnityEngine_AssetBundleUnloadOperation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BuildCompression), UnityEngine_BuildCompression_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioSettings), UnityEngine_AudioSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioSettings.Mobile), UnityEngine_AudioSettings_Mobile_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioSource), UnityEngine_AudioSource_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioLowPassFilter), UnityEngine_AudioLowPassFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioHighPassFilter), UnityEngine_AudioHighPassFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioReverbFilter), UnityEngine_AudioReverbFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioConfiguration), UnityEngine_AudioConfiguration_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioClip), UnityEngine_AudioClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioBehaviour), UnityEngine_AudioBehaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioListener), UnityEngine_AudioListener_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioReverbZone), UnityEngine_AudioReverbZone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioDistortionFilter), UnityEngine_AudioDistortionFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioEchoFilter), UnityEngine_AudioEchoFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioChorusFilter), UnityEngine_AudioChorusFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Microphone), UnityEngine_Microphone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AudioRenderer), UnityEngine_AudioRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WebCamDevice), UnityEngine_WebCamDevice_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WebCamTexture), UnityEngine_WebCamTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ClusterSerialization), UnityEngine_ClusterSerialization_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExpressionEvaluator), UnityEngine_ExpressionEvaluator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SortingLayer), UnityEngine_SortingLayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Keyframe), UnityEngine_Keyframe_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimationCurve), UnityEngine_AnimationCurve_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Application), UnityEngine_Application_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CachedAssetBundle), UnityEngine_CachedAssetBundle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Cache), UnityEngine_Cache_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Camera), UnityEngine_Camera_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Camera.GateFitParameters), UnityEngine_Camera_GateFitParameters_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Camera.RenderRequest), UnityEngine_Camera_RenderRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoundingSphere), UnityEngine_BoundingSphere_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CullingGroupEvent), UnityEngine_CullingGroupEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CullingGroup), UnityEngine_CullingGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FlareLayer), UnityEngine_FlareLayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ReflectionProbe), UnityEngine_ReflectionProbe_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CrashReport), UnityEngine_CrashReport_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Debug), UnityEngine_Debug_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExposedPropertyResolver), UnityEngine_ExposedPropertyResolver_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IExposedPropertyTable), UnityEngine_IExposedPropertyTable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Bounds), UnityEngine_Bounds_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoundsInt), UnityEngine_BoundsInt_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoundsInt.PositionEnumerator), UnityEngine_BoundsInt_PositionEnumerator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GeometryUtility), UnityEngine_GeometryUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Plane), UnityEngine_Plane_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Ray), UnityEngine_Ray_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Ray2D), UnityEngine_Ray2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Rect), UnityEngine_Rect_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectInt), UnityEngine_RectInt_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectInt.PositionEnumerator), UnityEngine_RectInt_PositionEnumerator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectOffset), UnityEngine_RectOffset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DynamicGI), UnityEngine_DynamicGI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightingSettings), UnityEngine_LightingSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Gizmos), UnityEngine_Gizmos_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BeforeRenderOrderAttribute), UnityEngine_BeforeRenderOrderAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BillboardAsset), UnityEngine_BillboardAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BillboardRenderer), UnityEngine_BillboardRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomRenderTextureManager), UnityEngine_CustomRenderTextureManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Display), UnityEngine_Display_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RefreshRate), UnityEngine_RefreshRate_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DisplayInfo), UnityEngine_DisplayInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SleepTimeout), UnityEngine_SleepTimeout_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Screen), UnityEngine_Screen_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderBuffer), UnityEngine_RenderBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Graphics), UnityEngine_Graphics_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GL), UnityEngine_GL_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ScalableBufferManager), UnityEngine_ScalableBufferManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrameTiming), UnityEngine_FrameTiming_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrameTimingManager), UnityEngine_FrameTimingManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightmapData), UnityEngine_LightmapData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightmapSettings), UnityEngine_LightmapSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightProbes), UnityEngine_LightProbes_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HDROutputSettings), UnityEngine_HDROutputSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resolution), UnityEngine_Resolution_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderTargetSetup), UnityEngine_RenderTargetSetup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderParams), UnityEngine_RenderParams_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.QualitySettings), UnityEngine_QualitySettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RendererExtensions), UnityEngine_RendererExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectTransformsToLDR), UnityEngine_ImageEffectTransformsToLDR_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectAllowedInSceneView), UnityEngine_ImageEffectAllowedInSceneView_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectOpaque), UnityEngine_ImageEffectOpaque_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectAfterScale), UnityEngine_ImageEffectAfterScale_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageEffectUsesCommandBuffer), UnityEngine_ImageEffectUsesCommandBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mesh), UnityEngine_Mesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mesh.MeshData), UnityEngine_Mesh_MeshData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mesh.MeshDataArray), UnityEngine_Mesh_MeshDataArray_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Renderer), UnityEngine_Renderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Projector), UnityEngine_Projector_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Shader), UnityEngine_Shader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TrailRenderer), UnityEngine_TrailRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LineRenderer), UnityEngine_LineRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MaterialPropertyBlock), UnityEngine_MaterialPropertyBlock_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderSettings), UnityEngine_RenderSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Material), UnityEngine_Material_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GraphicsBufferHandle), UnityEngine_GraphicsBufferHandle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GraphicsBuffer), UnityEngine_GraphicsBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GraphicsBuffer.IndirectDrawArgs), UnityEngine_GraphicsBuffer_IndirectDrawArgs_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GraphicsBuffer.IndirectDrawIndexedArgs), UnityEngine_GraphicsBuffer_IndirectDrawIndexedArgs_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.OcclusionPortal), UnityEngine_OcclusionPortal_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.OcclusionArea), UnityEngine_OcclusionArea_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Flare), UnityEngine_Flare_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LensFlare), UnityEngine_LensFlare_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightBakingOutput), UnityEngine_LightBakingOutput_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Light), UnityEngine_Light_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Skybox), UnityEngine_Skybox_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MeshFilter), UnityEngine_MeshFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightProbeProxyVolume), UnityEngine_LightProbeProxyVolume_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SkinnedMeshRenderer), UnityEngine_SkinnedMeshRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightProbeGroup), UnityEngine_LightProbeGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LineUtility), UnityEngine_LineUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LOD), UnityEngine_LOD_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LODGroup), UnityEngine_LODGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoneWeight), UnityEngine_BoneWeight_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoneWeight1), UnityEngine_BoneWeight1_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CombineInstance), UnityEngine_CombineInstance_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Texture), UnityEngine_Texture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Texture2D), UnityEngine_Texture2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Cubemap), UnityEngine_Cubemap_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Texture3D), UnityEngine_Texture3D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Texture2DArray), UnityEngine_Texture2DArray_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CubemapArray), UnityEngine_CubemapArray_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SparseTexture), UnityEngine_SparseTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderTexture), UnityEngine_RenderTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomRenderTextureUpdateZone), UnityEngine_CustomRenderTextureUpdateZone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomRenderTexture), UnityEngine_CustomRenderTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RenderTextureDescriptor), UnityEngine_RenderTextureDescriptor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Hash128), UnityEngine_Hash128_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HashUtilities), UnityEngine_HashUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HashUnsafeUtilities), UnityEngine_HashUnsafeUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Cursor), UnityEngine_Cursor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ILogger), UnityEngine_ILogger_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ILogHandler), UnityEngine_ILogHandler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Logger), UnityEngine_Logger_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Color), UnityEngine_Color_Wrap.GetRegisterInfo);
                UnityEngine_Color_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Color32), UnityEngine_Color32_Wrap.GetRegisterInfo);
                UnityEngine_Color32_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ColorUtility), UnityEngine_ColorUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GradientColorKey), UnityEngine_GradientColorKey_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GradientAlphaKey), UnityEngine_GradientAlphaKey_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Gradient), UnityEngine_Gradient_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrustumPlanes), UnityEngine_FrustumPlanes_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Matrix4x4), UnityEngine_Matrix4x4_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector3), UnityEngine_Vector3_Wrap.GetRegisterInfo);
                UnityEngine_Vector3_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Quaternion), UnityEngine_Quaternion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Mathf), UnityEngine_Mathf_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector2), UnityEngine_Vector2_Wrap.GetRegisterInfo);
                UnityEngine_Vector2_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector2Int), UnityEngine_Vector2Int_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector3Int), UnityEngine_Vector3Int_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector4), UnityEngine_Vector4_Wrap.GetRegisterInfo);
                UnityEngine_Vector4_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Ping), UnityEngine_Ping_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PlayerPrefsException), UnityEngine_PlayerPrefsException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PlayerPrefs), UnityEngine_PlayerPrefs_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PropertyAttribute), UnityEngine_PropertyAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContextMenuItemAttribute), UnityEngine_ContextMenuItemAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.InspectorNameAttribute), UnityEngine_InspectorNameAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TooltipAttribute), UnityEngine_TooltipAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpaceAttribute), UnityEngine_SpaceAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HeaderAttribute), UnityEngine_HeaderAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RangeAttribute), UnityEngine_RangeAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MinAttribute), UnityEngine_MinAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MultilineAttribute), UnityEngine_MultilineAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextAreaAttribute), UnityEngine_TextAreaAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ColorUsageAttribute), UnityEngine_ColorUsageAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GradientUsageAttribute), UnityEngine_GradientUsageAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DelayedAttribute), UnityEngine_DelayedAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.NonReorderableAttribute), UnityEngine_NonReorderableAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PropertyName), UnityEngine_PropertyName_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Random), UnityEngine_Random_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Random.State), UnityEngine_Random_State_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IconAttribute), UnityEngine_IconAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ResourceRequest), UnityEngine_ResourceRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ResourcesAPI), UnityEngine_ResourcesAPI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resources), UnityEngine_Resources_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AsyncOperation), UnityEngine_AsyncOperation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DisallowMultipleComponent), UnityEngine_DisallowMultipleComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RequireComponent), UnityEngine_RequireComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AddComponentMenu), UnityEngine_AddComponentMenu_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CreateAssetMenuAttribute), UnityEngine_CreateAssetMenuAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContextMenu), UnityEngine_ContextMenu_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExecuteInEditMode), UnityEngine_ExecuteInEditMode_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExecuteAlways), UnityEngine_ExecuteAlways_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HideInInspector), UnityEngine_HideInInspector_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HelpURLAttribute), UnityEngine_HelpURLAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DefaultExecutionOrder), UnityEngine_DefaultExecutionOrder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AssemblyIsEditorAssembly), UnityEngine_AssemblyIsEditorAssembly_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExcludeFromPresetAttribute), UnityEngine_ExcludeFromPresetAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Behaviour), UnityEngine_Behaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Component), UnityEngine_Component_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Coroutine), UnityEngine_Coroutine_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomYieldInstruction), UnityEngine_CustomYieldInstruction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExcludeFromObjectFactoryAttribute), UnityEngine_ExcludeFromObjectFactoryAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GameObject), UnityEngine_GameObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.InspectorOrderAttribute), UnityEngine_InspectorOrderAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LayerMask), UnityEngine_LayerMask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MonoBehaviour), UnityEngine_MonoBehaviour_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RangeInt), UnityEngine_RangeInt_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RuntimeInitializeOnLoadMethodAttribute), UnityEngine_RuntimeInitializeOnLoadMethodAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ScriptableObject), UnityEngine_ScriptableObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SelectionBaseAttribute), UnityEngine_SelectionBaseAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.StackTraceUtility), UnityEngine_StackTraceUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UnityException), UnityEngine_UnityException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MissingComponentException), UnityEngine_MissingComponentException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UnassignedReferenceException), UnityEngine_UnassignedReferenceException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MissingReferenceException), UnityEngine_MissingReferenceException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextAsset), UnityEngine_TextAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TrackedReference), UnityEngine_TrackedReference_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UnityAPICompatibilityVersionAttribute), UnityEngine_UnityAPICompatibilityVersionAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Object), UnityEngine_Object_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitForEndOfFrame), UnityEngine_WaitForEndOfFrame_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitForFixedUpdate), UnityEngine_WaitForFixedUpdate_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitForSeconds), UnityEngine_WaitForSeconds_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitForSecondsRealtime), UnityEngine_WaitForSecondsRealtime_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitUntil), UnityEngine_WaitUntil_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WaitWhile), UnityEngine_WaitWhile_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.YieldInstruction), UnityEngine_YieldInstruction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Security), UnityEngine_Security_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Types), UnityEngine_Types_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SerializeField), UnityEngine_SerializeField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SerializeReference), UnityEngine_SerializeReference_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PreferBinarySerialization), UnityEngine_PreferBinarySerialization_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ISerializationCallbackReceiver), UnityEngine_ISerializationCallbackReceiver_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ComputeBuffer), UnityEngine_ComputeBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ComputeShader), UnityEngine_ComputeShader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ShaderVariantCollection), UnityEngine_ShaderVariantCollection_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ShaderVariantCollection.ShaderVariant), UnityEngine_ShaderVariantCollection_ShaderVariant_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Snapping), UnityEngine_Snapping_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.StaticBatchingUtility), UnityEngine_StaticBatchingUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SystemInfo), UnityEngine_SystemInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Time), UnityEngine_Time_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TouchScreenKeyboard), UnityEngine_TouchScreenKeyboard_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TouchScreenKeyboard.Android), UnityEngine_TouchScreenKeyboard_Android_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UnityEventQueueSystem), UnityEngine_UnityEventQueueSystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Pose), UnityEngine_Pose_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrameDebugger), UnityEngine_FrameDebugger_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DrivenRectTransformTracker), UnityEngine_DrivenRectTransformTracker_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectTransform), UnityEngine_RectTransform_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Transform), UnityEngine_Transform_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpriteRenderer), UnityEngine_SpriteRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SecondarySpriteTexture), UnityEngine_SecondarySpriteTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Sprite), UnityEngine_Sprite_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Social), UnityEngine_Social_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Grid), UnityEngine_Grid_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GridLayout), UnityEngine_GridLayout_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Event), UnityEngine_Event_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUI), UnityEngine_GUI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUI.Scope), UnityEngine_GUI_Scope_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUIContent), UnityEngine_GUIContent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUILayout), UnityEngine_GUILayout_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUILayoutOption), UnityEngine_GUILayoutOption_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUILayoutUtility), UnityEngine_GUILayoutUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUISettings), UnityEngine_GUISettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUISkin), UnityEngine_GUISkin_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUIStyleState), UnityEngine_GUIStyleState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUIStyle), UnityEngine_GUIStyle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUITargetAttribute), UnityEngine_GUITargetAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GUIUtility), UnityEngine_GUIUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ExitGUIException), UnityEngine_ExitGUIException_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextEditor), UnityEngine_TextEditor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ImageConversion), UnityEngine_ImageConversion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Touch), UnityEngine_Touch_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PenData), UnityEngine_PenData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AccelerationEvent), UnityEngine_AccelerationEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Gyroscope), UnityEngine_Gyroscope_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LocationInfo), UnityEngine_LocationInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LocationService), UnityEngine_LocationService_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Compass), UnityEngine_Compass_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Input), UnityEngine_Input_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JsonUtility), UnityEngine_JsonUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LocalizationAsset), UnityEngine_LocalizationAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem), UnityEngine_ParticleSystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.MinMaxCurve), UnityEngine_ParticleSystem_MinMaxCurve_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.MainModule), UnityEngine_ParticleSystem_MainModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.EmissionModule), UnityEngine_ParticleSystem_EmissionModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ShapeModule), UnityEngine_ParticleSystem_ShapeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.CollisionModule), UnityEngine_ParticleSystem_CollisionModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.TriggerModule), UnityEngine_ParticleSystem_TriggerModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.SubEmittersModule), UnityEngine_ParticleSystem_SubEmittersModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.TextureSheetAnimationModule), UnityEngine_ParticleSystem_TextureSheetAnimationModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.Particle), UnityEngine_ParticleSystem_Particle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.Burst), UnityEngine_ParticleSystem_Burst_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.MinMaxGradient), UnityEngine_ParticleSystem_MinMaxGradient_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.EmitParams), UnityEngine_ParticleSystem_EmitParams_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.PlaybackState), UnityEngine_ParticleSystem_PlaybackState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.Trails), UnityEngine_ParticleSystem_Trails_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ColliderData), UnityEngine_ParticleSystem_ColliderData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.VelocityOverLifetimeModule), UnityEngine_ParticleSystem_VelocityOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule), UnityEngine_ParticleSystem_LimitVelocityOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.InheritVelocityModule), UnityEngine_ParticleSystem_InheritVelocityModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule), UnityEngine_ParticleSystem_LifetimeByEmitterSpeedModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ForceOverLifetimeModule), UnityEngine_ParticleSystem_ForceOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ColorOverLifetimeModule), UnityEngine_ParticleSystem_ColorOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ColorBySpeedModule), UnityEngine_ParticleSystem_ColorBySpeedModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.SizeOverLifetimeModule), UnityEngine_ParticleSystem_SizeOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.SizeBySpeedModule), UnityEngine_ParticleSystem_SizeBySpeedModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.RotationOverLifetimeModule), UnityEngine_ParticleSystem_RotationOverLifetimeModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.RotationBySpeedModule), UnityEngine_ParticleSystem_RotationBySpeedModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.ExternalForcesModule), UnityEngine_ParticleSystem_ExternalForcesModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.NoiseModule), UnityEngine_ParticleSystem_NoiseModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.LightsModule), UnityEngine_ParticleSystem_LightsModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.TrailModule), UnityEngine_ParticleSystem_TrailModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem.CustomDataModule), UnityEngine_ParticleSystem_CustomDataModule_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticlePhysicsExtensions), UnityEngine_ParticlePhysicsExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleCollisionEvent), UnityEngine_ParticleCollisionEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystemForceField), UnityEngine_ParticleSystemForceField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WheelFrictionCurve), UnityEngine_WheelFrictionCurve_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SoftJointLimit), UnityEngine_SoftJointLimit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SoftJointLimitSpring), UnityEngine_SoftJointLimitSpring_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointDrive), UnityEngine_JointDrive_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointMotor), UnityEngine_JointMotor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointSpring), UnityEngine_JointSpring_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointLimits), UnityEngine_JointLimits_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ControllerColliderHit), UnityEngine_ControllerColliderHit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collision), UnityEngine_Collision_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ArticulationDrive), UnityEngine_ArticulationDrive_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ArticulationReducedSpace), UnityEngine_ArticulationReducedSpace_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ArticulationJacobian), UnityEngine_ArticulationJacobian_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ArticulationBody), UnityEngine_ArticulationBody_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Physics), UnityEngine_Physics_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ModifiableContactPair), UnityEngine_ModifiableContactPair_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ModifiableMassProperties), UnityEngine_ModifiableMassProperties_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicMaterial), UnityEngine_PhysicMaterial_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RaycastHit), UnityEngine_RaycastHit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Rigidbody), UnityEngine_Rigidbody_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collider), UnityEngine_Collider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CharacterController), UnityEngine_CharacterController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MeshCollider), UnityEngine_MeshCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CapsuleCollider), UnityEngine_CapsuleCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoxCollider), UnityEngine_BoxCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SphereCollider), UnityEngine_SphereCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ConstantForce), UnityEngine_ConstantForce_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Joint), UnityEngine_Joint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HingeJoint), UnityEngine_HingeJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpringJoint), UnityEngine_SpringJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FixedJoint), UnityEngine_FixedJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CharacterJoint), UnityEngine_CharacterJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ConfigurableJoint), UnityEngine_ConfigurableJoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContactPoint), UnityEngine_ContactPoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsScene), UnityEngine_PhysicsScene_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsSceneExtensions), UnityEngine_PhysicsSceneExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RaycastCommand), UnityEngine_RaycastCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpherecastCommand), UnityEngine_SpherecastCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CapsulecastCommand), UnityEngine_CapsulecastCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoxcastCommand), UnityEngine_BoxcastCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ClosestPointCommand), UnityEngine_ClosestPointCommand_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsScene2D), UnityEngine_PhysicsScene2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsSceneExtensions2D), UnityEngine_PhysicsSceneExtensions2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Physics2D), UnityEngine_Physics2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsShape2D), UnityEngine_PhysicsShape2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsShapeGroup2D), UnityEngine_PhysicsShapeGroup2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ColliderDistance2D), UnityEngine_ColliderDistance2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContactFilter2D), UnityEngine_ContactFilter2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collision2D), UnityEngine_Collision2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ContactPoint2D), UnityEngine_ContactPoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointAngleLimits2D), UnityEngine_JointAngleLimits2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointTranslationLimits2D), UnityEngine_JointTranslationLimits2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointMotor2D), UnityEngine_JointMotor2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.JointSuspension2D), UnityEngine_JointSuspension2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RaycastHit2D), UnityEngine_RaycastHit2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsJobOptions2D), UnityEngine_PhysicsJobOptions2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Rigidbody2D), UnityEngine_Rigidbody2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collider2D), UnityEngine_Collider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CustomCollider2D), UnityEngine_CustomCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CircleCollider2D), UnityEngine_CircleCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CapsuleCollider2D), UnityEngine_CapsuleCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.EdgeCollider2D), UnityEngine_EdgeCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoxCollider2D), UnityEngine_BoxCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PolygonCollider2D), UnityEngine_PolygonCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CompositeCollider2D), UnityEngine_CompositeCollider2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Joint2D), UnityEngine_Joint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnchoredJoint2D), UnityEngine_AnchoredJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpringJoint2D), UnityEngine_SpringJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DistanceJoint2D), UnityEngine_DistanceJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FrictionJoint2D), UnityEngine_FrictionJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.HingeJoint2D), UnityEngine_HingeJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RelativeJoint2D), UnityEngine_RelativeJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SliderJoint2D), UnityEngine_SliderJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TargetJoint2D), UnityEngine_TargetJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.FixedJoint2D), UnityEngine_FixedJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WheelJoint2D), UnityEngine_WheelJoint2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Effector2D), UnityEngine_Effector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AreaEffector2D), UnityEngine_AreaEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BuoyancyEffector2D), UnityEngine_BuoyancyEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PointEffector2D), UnityEngine_PointEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PlatformEffector2D), UnityEngine_PlatformEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SurfaceEffector2D), UnityEngine_SurfaceEffector2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsUpdateBehaviour2D), UnityEngine_PhysicsUpdateBehaviour2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ConstantForce2D), UnityEngine_ConstantForce2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PhysicsMaterial2D), UnityEngine_PhysicsMaterial2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ScreenCapture), UnityEngine_ScreenCapture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpriteMask), UnityEngine_SpriteMask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.StreamingController), UnityEngine_StreamingController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IntegratedSubsystem), UnityEngine_IntegratedSubsystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.IntegratedSubsystemDescriptor), UnityEngine_IntegratedSubsystemDescriptor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ISubsystem), UnityEngine_ISubsystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ISubsystemDescriptor), UnityEngine_ISubsystemDescriptor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Subsystem), UnityEngine_Subsystem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SubsystemDescriptor), UnityEngine_SubsystemDescriptor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SubsystemManager), UnityEngine_SubsystemManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Terrain), UnityEngine_Terrain_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TerrainExtensions), UnityEngine_TerrainExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Tree), UnityEngine_Tree_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TerrainCallbacks), UnityEngine_TerrainCallbacks_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TreePrototype), UnityEngine_TreePrototype_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DetailPrototype), UnityEngine_DetailPrototype_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SplatPrototype), UnityEngine_SplatPrototype_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TreeInstance), UnityEngine_TreeInstance_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PatchExtents), UnityEngine_PatchExtents_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.DetailInstanceTransform), UnityEngine_DetailInstanceTransform_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TerrainLayer), UnityEngine_TerrainLayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TerrainCollider), UnityEngine_TerrainCollider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextGenerationSettings), UnityEngine_TextGenerationSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextGenerator), UnityEngine_TextGenerator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.TextMesh), UnityEngine_TextMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CharacterInfo), UnityEngine_CharacterInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UICharInfo), UnityEngine_UICharInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UILineInfo), UnityEngine_UILineInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UIVertex), UnityEngine_UIVertex_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Font), UnityEngine_Font_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ICanvasRaycastFilter), UnityEngine_ICanvasRaycastFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CanvasGroup), UnityEngine_CanvasGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.CanvasRenderer), UnityEngine_CanvasRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectTransformUtility), UnityEngine_RectTransformUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Canvas), UnityEngine_Canvas_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UISystemProfilerApi), UnityEngine_UISystemProfilerApi_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RemoteSettings), UnityEngine_RemoteSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RemoteConfigSettings), UnityEngine_RemoteConfigSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WWWForm), UnityEngine_WWWForm_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WWWAudioExtensions), UnityEngine_WWWAudioExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GLoader3D), FairyGUI_GLoader3D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TMPFont), FairyGUI_TMPFont_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TextFormat), FairyGUI_TextFormat_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.BlendModeUtils), FairyGUI_BlendModeUtils_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.CaptureCamera), FairyGUI_CaptureCamera_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Container), FairyGUI_Container_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.DisplayObject), FairyGUI_DisplayObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.DisplayObjectInfo), FairyGUI_DisplayObjectInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GoWrapper), FairyGUI_GoWrapper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ColliderHitTest), FairyGUI_ColliderHitTest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.HitTestContext), FairyGUI_HitTestContext_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.IHitTest), FairyGUI_IHitTest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.MeshColliderHitTest), FairyGUI_MeshColliderHitTest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.PixelHitTestData), FairyGUI_PixelHitTestData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.PixelHitTest), FairyGUI_PixelHitTest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.RectHitTest), FairyGUI_RectHitTest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ShapeHitTest), FairyGUI_ShapeHitTest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Image), FairyGUI_Image_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.MaterialManager), FairyGUI_MaterialManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.CompositeMesh), FairyGUI_CompositeMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.EllipseMesh), FairyGUI_EllipseMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.FillMesh), FairyGUI_FillMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.LineMesh), FairyGUI_LineMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.IMeshFactory), FairyGUI_IMeshFactory_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.PlaneMesh), FairyGUI_PlaneMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.PolygonMesh), FairyGUI_PolygonMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.RectMesh), FairyGUI_RectMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.RegularPolygonMesh), FairyGUI_RegularPolygonMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.RoundedRectMesh), FairyGUI_RoundedRectMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.StraightLineMesh), FairyGUI_StraightLineMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.VertexBuffer), FairyGUI_VertexBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.MovieClip), FairyGUI_MovieClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.NAudioClip), FairyGUI_NAudioClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.NGraphics), FairyGUI_NGraphics_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.NTexture), FairyGUI_NTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ShaderConfig), FairyGUI_ShaderConfig_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Shape), FairyGUI_Shape_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Stage), FairyGUI_Stage_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.StageCamera), FairyGUI_StageCamera_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.StageEngine), FairyGUI_StageEngine_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Stats), FairyGUI_Stats_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.BaseFont), FairyGUI_BaseFont_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.BitmapFont), FairyGUI_BitmapFont_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.DynamicFont), FairyGUI_DynamicFont_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Emoji), FairyGUI_Emoji_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.FontManager), FairyGUI_FontManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.IKeyboard), FairyGUI_IKeyboard_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.InputTextField), FairyGUI_InputTextField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.RichTextField), FairyGUI_RichTextField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.RTLSupport), FairyGUI_RTLSupport_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.SelectionShape), FairyGUI_SelectionShape_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TextField), FairyGUI_TextField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TouchScreenKeyboard), FairyGUI_TouchScreenKeyboard_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TypingEffect), FairyGUI_TypingEffect_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UpdateContext), FairyGUI_UpdateContext_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.EventContext), FairyGUI_EventContext_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.EventDispatcher), FairyGUI_EventDispatcher_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.EventListener), FairyGUI_EventListener_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.IEventDispatcher), FairyGUI_IEventDispatcher_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.InputEvent), FairyGUI_InputEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.BlurFilter), FairyGUI_BlurFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ColorFilter), FairyGUI_ColorFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.IFilter), FairyGUI_IFilter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.LongPressGesture), FairyGUI_LongPressGesture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.PinchGesture), FairyGUI_PinchGesture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.RotationGesture), FairyGUI_RotationGesture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.SwipeGesture), FairyGUI_SwipeGesture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.EaseManager), FairyGUI_EaseManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.CustomEase), FairyGUI_CustomEase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GPathPoint), FairyGUI_GPathPoint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GPath), FairyGUI_GPath_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GTween), FairyGUI_GTween_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ITweenListener), FairyGUI_ITweenListener_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GTweener), FairyGUI_GTweener_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TweenValue), FairyGUI_TweenValue_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ChangePageAction), FairyGUI_ChangePageAction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ControllerAction), FairyGUI_ControllerAction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.PlayTransitionAction), FairyGUI_PlayTransitionAction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.AsyncCreationHelper), FairyGUI_AsyncCreationHelper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Controller), FairyGUI_Controller_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.DragDropManager), FairyGUI_DragDropManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.EMRenderTarget), FairyGUI_EMRenderTarget_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.EMRenderSupport), FairyGUI_EMRenderSupport_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GButton), FairyGUI_GButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GComboBox), FairyGUI_GComboBox_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GComponent), FairyGUI_GComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearAnimation), FairyGUI_GearAnimation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearBase), FairyGUI_GearBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearTweenConfig), FairyGUI_GearTweenConfig_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearColor), FairyGUI_GearColor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearDisplay), FairyGUI_GearDisplay_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearDisplay2), FairyGUI_GearDisplay2_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearFontSize), FairyGUI_GearFontSize_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearIcon), FairyGUI_GearIcon_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearLook), FairyGUI_GearLook_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearSize), FairyGUI_GearSize_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearText), FairyGUI_GearText_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GearXY), FairyGUI_GearXY_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.IAnimationGear), FairyGUI_IAnimationGear_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.IColorGear), FairyGUI_IColorGear_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ITextColorGear), FairyGUI_ITextColorGear_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GGraph), FairyGUI_GGraph_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GGroup), FairyGUI_GGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GImage), FairyGUI_GImage_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GLabel), FairyGUI_GLabel_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GList), FairyGUI_GList_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GLoader), FairyGUI_GLoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GMovieClip), FairyGUI_GMovieClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GObject), FairyGUI_GObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GObjectPool), FairyGUI_GObjectPool_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GProgressBar), FairyGUI_GProgressBar_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GRichTextField), FairyGUI_GRichTextField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GRoot), FairyGUI_GRoot_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GScrollBar), FairyGUI_GScrollBar_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GSlider), FairyGUI_GSlider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GTextField), FairyGUI_GTextField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GTextInput), FairyGUI_GTextInput_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GTree), FairyGUI_GTree_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.GTreeNode), FairyGUI_GTreeNode_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.IUISource), FairyGUI_IUISource_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Margin), FairyGUI_Margin_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.PackageItem), FairyGUI_PackageItem_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.PopupMenu), FairyGUI_PopupMenu_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Relations), FairyGUI_Relations_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.ScrollPane), FairyGUI_ScrollPane_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Transition), FairyGUI_Transition_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TranslationHelper), FairyGUI_TranslationHelper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TreeNode), FairyGUI_TreeNode_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TreeView), FairyGUI_TreeView_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UIConfig), FairyGUI_UIConfig_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UIContentScaler), FairyGUI_UIContentScaler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UIObjectFactory), FairyGUI_UIObjectFactory_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UIPackage), FairyGUI_UIPackage_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UIPainter), FairyGUI_UIPainter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UIPanel), FairyGUI_UIPanel_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Window), FairyGUI_Window_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Timers), FairyGUI_Timers_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.BlendModeUtils.BlendFactor), FairyGUI_BlendModeUtils_BlendFactor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.MovieClip.Frame), FairyGUI_MovieClip_Frame_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.NGraphics.VertexMatrix), FairyGUI_NGraphics_VertexMatrix_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.BitmapFont.BMGlyph), FairyGUI_BitmapFont_BMGlyph_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TextField.LineInfo), FairyGUI_TextField_LineInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TextField.LineCharInfo), FairyGUI_TextField_LineCharInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.TextField.CharPosition), FairyGUI_TextField_CharPosition_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UpdateContext.ClipInfo), FairyGUI_UpdateContext_ClipInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.UIConfig.ConfigValue), FairyGUI_UIConfig_ConfigValue_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.SortingLayerHelper), TMPro_SortingLayerHelper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_FontAsset_CreationMenu), TMPro_TMP_FontAsset_CreationMenu_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_ProjectConversionUtility), TMPro_TMP_ProjectConversionUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_PackageUtilities), TMPro_TMP_PackageUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_PostBuildProcessHandler), TMPro_TMP_PostBuildProcessHandler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_PreBuildProcessor), TMPro_TMP_PreBuildProcessor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SpriteAssetImporter), TMPro_TMP_SpriteAssetImporter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Animation), Spine_Animation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Timeline), Spine_Timeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.IBoneTimeline), Spine_IBoneTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.ISlotTimeline), Spine_ISlotTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.CurveTimeline), Spine_CurveTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.RotateTimeline), Spine_RotateTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.TranslateTimeline), Spine_TranslateTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.ScaleTimeline), Spine_ScaleTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.ShearTimeline), Spine_ShearTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.ColorTimeline), Spine_ColorTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.TwoColorTimeline), Spine_TwoColorTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AttachmentTimeline), Spine_AttachmentTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.DeformTimeline), Spine_DeformTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.EventTimeline), Spine_EventTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.DrawOrderTimeline), Spine_DrawOrderTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.IkConstraintTimeline), Spine_IkConstraintTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.TransformConstraintTimeline), Spine_TransformConstraintTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.PathConstraintPositionTimeline), Spine_PathConstraintPositionTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.PathConstraintSpacingTimeline), Spine_PathConstraintSpacingTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.PathConstraintMixTimeline), Spine_PathConstraintMixTimeline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AnimationState), Spine_AnimationState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.TrackEntry), Spine_TrackEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AnimationStateData), Spine_AnimationStateData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Atlas), Spine_Atlas_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AtlasPage), Spine_AtlasPage_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AtlasRegion), Spine_AtlasRegion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.TextureLoader), Spine_TextureLoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AtlasAttachmentLoader), Spine_AtlasAttachmentLoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Attachment), Spine_Attachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.IHasRendererObject), Spine_IHasRendererObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AttachmentLoader), Spine_AttachmentLoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.BoundingBoxAttachment), Spine_BoundingBoxAttachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.ClippingAttachment), Spine_ClippingAttachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.MeshAttachment), Spine_MeshAttachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.PathAttachment), Spine_PathAttachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.PointAttachment), Spine_PointAttachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.RegionAttachment), Spine_RegionAttachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.VertexAttachment), Spine_VertexAttachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Bone), Spine_Bone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.BoneData), Spine_BoneData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.ConstraintData), Spine_ConstraintData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Event), Spine_Event_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.EventData), Spine_EventData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.IkConstraint), Spine_IkConstraint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.IkConstraintData), Spine_IkConstraintData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.IUpdatable), Spine_IUpdatable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Json), Spine_Json_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.MathUtils), Spine_MathUtils_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.IInterpolation), Spine_IInterpolation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Pow), Spine_Pow_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.PowOut), Spine_PowOut_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.PathConstraint), Spine_PathConstraint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.PathConstraintData), Spine_PathConstraintData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Skeleton), Spine_Skeleton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.SkeletonBinary), Spine_SkeletonBinary_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.SkeletonBounds), Spine_SkeletonBounds_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Polygon), Spine_Polygon_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.SkeletonClipping), Spine_SkeletonClipping_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.SkeletonData), Spine_SkeletonData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.SkeletonJson), Spine_SkeletonJson_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Skin), Spine_Skin_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Slot), Spine_Slot_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.SlotData), Spine_SlotData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.TransformConstraint), Spine_TransformConstraint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.TransformConstraintData), Spine_TransformConstraintData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Triangulator), Spine_Triangulator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.BoneMatrix), Spine_BoneMatrix_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.SpineSkeletonExtensions), Spine_SpineSkeletonExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.AnimationReferenceAsset), Spine_Unity_AnimationReferenceAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.AtlasAssetBase), Spine_Unity_AtlasAssetBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.EventDataReferenceAsset), Spine_Unity_EventDataReferenceAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.RegionlessAttachmentLoader), Spine_Unity_RegionlessAttachmentLoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonDataAsset), Spine_Unity_SkeletonDataAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonDataCompatibility), Spine_Unity_SkeletonDataCompatibility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonDataModifierAsset), Spine_Unity_SkeletonDataModifierAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineAtlasAsset), Spine_Unity_SpineAtlasAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.MaterialsTextureLoader), Spine_Unity_MaterialsTextureLoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineSpriteAtlasAsset), Spine_Unity_SpineSpriteAtlasAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.BoneFollower), Spine_Unity_BoneFollower_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.BoneFollowerGraphic), Spine_Unity_BoneFollowerGraphic_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.BoundingBoxFollower), Spine_Unity_BoundingBoxFollower_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.PointFollower), Spine_Unity_PointFollower_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonMecanimRootMotion), Spine_Unity_SkeletonMecanimRootMotion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRootMotion), Spine_Unity_SkeletonRootMotion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRootMotionBase), Spine_Unity_SkeletonRootMotionBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonAnimation), Spine_Unity_SkeletonAnimation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonGraphic), Spine_Unity_SkeletonGraphic_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonMecanim), Spine_Unity_SkeletonMecanim_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRenderer), Spine_Unity_SkeletonRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonGraphicCustomMaterials), Spine_Unity_SkeletonGraphicCustomMaterials_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRendererCustomMaterials), Spine_Unity_SkeletonRendererCustomMaterials_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonPartsRenderer), Spine_Unity_SkeletonPartsRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRenderSeparator), Spine_Unity_SkeletonRenderSeparator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.ActivateBasedOnFlipDirection), Spine_Unity_ActivateBasedOnFlipDirection_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.FollowLocationRigidbody), Spine_Unity_FollowLocationRigidbody_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.FollowLocationRigidbody2D), Spine_Unity_FollowLocationRigidbody2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.FollowSkeletonUtilityRootRotation), Spine_Unity_FollowSkeletonUtilityRootRotation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonUtility), Spine_Unity_SkeletonUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonUtilityBone), Spine_Unity_SkeletonUtilityBone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonUtilityConstraint), Spine_Unity_SkeletonUtilityConstraint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.ISkeletonAnimation), Spine_Unity_ISkeletonAnimation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.IHasSkeletonDataAsset), Spine_Unity_IHasSkeletonDataAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.ISkeletonComponent), Spine_Unity_ISkeletonComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.IAnimationStateComponent), Spine_Unity_IAnimationStateComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.IHasSkeletonRenderer), Spine_Unity_IHasSkeletonRenderer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.IHasSkeletonComponent), Spine_Unity_IHasSkeletonComponent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.MeshGeneratorBuffers), Spine_Unity_MeshGeneratorBuffers_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.MeshGenerator), Spine_Unity_MeshGenerator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.MeshRendererBuffers), Spine_Unity_MeshRendererBuffers_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRendererInstruction), Spine_Unity_SkeletonRendererInstruction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineMesh), Spine_Unity_SpineMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SubmeshInstruction), Spine_Unity_SubmeshInstruction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.BlendModeMaterialsAsset), Spine_Unity_BlendModeMaterialsAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineAttributeBase), Spine_Unity_SpineAttributeBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineBone), Spine_Unity_SpineBone_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineSlot), Spine_Unity_SpineSlot_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineAnimation), Spine_Unity_SpineAnimation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineEvent), Spine_Unity_SpineEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineIkConstraint), Spine_Unity_SpineIkConstraint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineTransformConstraint), Spine_Unity_SpineTransformConstraint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpinePathConstraint), Spine_Unity_SpinePathConstraint_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineSkin), Spine_Unity_SpineSkin_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineAttachment), Spine_Unity_SpineAttachment_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineAtlasRegion), Spine_Unity_SpineAtlasRegion_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.MaterialChecks), Spine_Unity_MaterialChecks_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonExtensions), Spine_Unity_SkeletonExtensions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.WaitForSpineAnimation), Spine_Unity_WaitForSpineAnimation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.WaitForSpineAnimationComplete), Spine_Unity_WaitForSpineAnimationComplete_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.WaitForSpineAnimationEnd), Spine_Unity_WaitForSpineAnimationEnd_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.WaitForSpineEvent), Spine_Unity_WaitForSpineEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.WaitForSpineTrackEntryEnd), Spine_Unity_WaitForSpineTrackEntryEnd_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AnimationStateData.AnimationPair), Spine_AnimationStateData_AnimationPair_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.AnimationStateData.AnimationPairComparer), Spine_AnimationStateData_AnimationPairComparer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Skin.SkinEntry), Spine_Skin_SkinEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonDataCompatibility.VersionInfo), Spine_Unity_SkeletonDataCompatibility_VersionInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonDataCompatibility.CompatibilityProblemInfo), Spine_Unity_SkeletonDataCompatibility_CompatibilityProblemInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonMecanim.MecanimTranslator), Spine_Unity_SkeletonMecanim_MecanimTranslator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRenderer.SpriteMaskInteractionMaterials), Spine_Unity_SkeletonRenderer_SpriteMaskInteractionMaterials_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonGraphicCustomMaterials.AtlasMaterialOverride), Spine_Unity_SkeletonGraphicCustomMaterials_AtlasMaterialOverride_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonGraphicCustomMaterials.AtlasTextureOverride), Spine_Unity_SkeletonGraphicCustomMaterials_AtlasTextureOverride_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRendererCustomMaterials.SlotMaterialOverride), Spine_Unity_SkeletonRendererCustomMaterials_SlotMaterialOverride_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonRendererCustomMaterials.AtlasMaterialOverride), Spine_Unity_SkeletonRendererCustomMaterials_AtlasMaterialOverride_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.MeshGenerator.Settings), Spine_Unity_MeshGenerator_Settings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.MeshRendererBuffers.SmartMesh), Spine_Unity_MeshRendererBuffers_SmartMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SpineAttachment.Hierarchy), Spine_Unity_SpineAttachment_Hierarchy_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonAnimationFixedTimestep), Spine_Unity_SkeletonAnimationFixedTimestep_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Spine.Unity.SkeletonAnimationMulti), Spine_Unity_SkeletonAnimationMulti_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.FastAction), TMPro_FastAction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.ITextPreprocessor), TMPro_ITextPreprocessor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.MaterialReferenceManager), TMPro_MaterialReferenceManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_MaterialReference), TMPro_TMP_MaterialReference_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.MaterialReference), TMPro_MaterialReference_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TextContainer), TMPro_TextContainer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TextMeshPro), TMPro_TextMeshPro_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TextMeshProUGUI), TMPro_TextMeshProUGUI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMPro_EventManager), TMPro_TMPro_EventManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.Compute_DT_EventArgs), TMPro_Compute_DT_EventArgs_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Math), TMPro_TMP_Math_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.VertexGradient), TMPro_VertexGradient_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_PageInfo), TMPro_TMP_PageInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_LinkInfo), TMPro_TMP_LinkInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_WordInfo), TMPro_TMP_WordInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SpriteInfo), TMPro_TMP_SpriteInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.Extents), TMPro_Extents_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.Mesh_Extents), TMPro_Mesh_Extents_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.WordWrapState), TMPro_WordWrapState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TagAttribute), TMPro_TagAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.RichTextTagAttribute), TMPro_RichTextTagAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Asset), TMPro_TMP_Asset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Character), TMPro_TMP_Character_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Vertex), TMPro_TMP_Vertex_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Offset), TMPro_TMP_Offset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.HighlightState), TMPro_HighlightState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_CharacterInfo), TMPro_TMP_CharacterInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_ColorGradient), TMPro_TMP_ColorGradient_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Compatibility), TMPro_TMP_Compatibility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_DefaultControls), TMPro_TMP_DefaultControls_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Dropdown), TMPro_TMP_Dropdown_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_EditorResourceManager), TMPro_TMP_EditorResourceManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_FontAsset), TMPro_TMP_FontAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.FaceInfo_Legacy), TMPro_FaceInfo_Legacy_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Glyph), TMPro_TMP_Glyph_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.FontAssetCreationSettings), TMPro_FontAssetCreationSettings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_FontWeightPair), TMPro_TMP_FontWeightPair_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.KerningPairKey), TMPro_KerningPairKey_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.GlyphValueRecord_Legacy), TMPro_GlyphValueRecord_Legacy_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.KerningPair), TMPro_KerningPair_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.KerningTable), TMPro_KerningTable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_FontUtilities), TMPro_TMP_FontUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_FontAssetUtilities), TMPro_TMP_FontAssetUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_GlyphValueRecord), TMPro_TMP_GlyphValueRecord_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_GlyphAdjustmentRecord), TMPro_TMP_GlyphAdjustmentRecord_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_GlyphPairAdjustmentRecord), TMPro_TMP_GlyphPairAdjustmentRecord_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.GlyphPairKey), TMPro_GlyphPairKey_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_FontFeatureTable), TMPro_TMP_FontFeatureTable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_InputField), TMPro_TMP_InputField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_InputValidator), TMPro_TMP_InputValidator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_LineInfo), TMPro_TMP_LineInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_MaterialManager), TMPro_TMP_MaterialManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_MeshInfo), TMPro_TMP_MeshInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_PackageResourceImporter), TMPro_TMP_PackageResourceImporter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_PackageResourceImporterWindow), TMPro_TMP_PackageResourceImporterWindow_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_ResourceManager), TMPro_TMP_ResourceManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_ScrollbarEventHandler), TMPro_TMP_ScrollbarEventHandler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SelectionCaret), TMPro_TMP_SelectionCaret_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Settings), TMPro_TMP_Settings_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.ShaderUtilities), TMPro_ShaderUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Sprite), TMPro_TMP_Sprite_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SpriteAnimator), TMPro_TMP_SpriteAnimator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SpriteAsset), TMPro_TMP_SpriteAsset_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SpriteCharacter), TMPro_TMP_SpriteCharacter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SpriteGlyph), TMPro_TMP_SpriteGlyph_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Style), TMPro_TMP_Style_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_StyleSheet), TMPro_TMP_StyleSheet_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SubMesh), TMPro_TMP_SubMesh_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_SubMeshUI), TMPro_TMP_SubMeshUI_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.ITextElement), TMPro_ITextElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Text), TMPro_TMP_Text_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_TextElement), TMPro_TMP_TextElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_TextElement_Legacy), TMPro_TMP_TextElement_Legacy_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_TextInfo), TMPro_TMP_TextInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_TextParsingUtilities), TMPro_TMP_TextParsingUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_FontStyleStack), TMPro_TMP_FontStyleStack_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.CaretInfo), TMPro_CaretInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_TextUtilities), TMPro_TMP_TextUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_UpdateManager), TMPro_TMP_UpdateManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_UpdateRegistry), TMPro_TMP_UpdateRegistry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_DefaultControls.Resources), TMPro_TMP_DefaultControls_Resources_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Dropdown.OptionData), TMPro_TMP_Dropdown_OptionData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Dropdown.OptionDataList), TMPro_TMP_Dropdown_OptionDataList_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Dropdown.DropdownEvent), TMPro_TMP_Dropdown_DropdownEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_InputField.SubmitEvent), TMPro_TMP_InputField_SubmitEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_InputField.OnChangeEvent), TMPro_TMP_InputField_OnChangeEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_InputField.SelectionEvent), TMPro_TMP_InputField_SelectionEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_InputField.TextSelectionEvent), TMPro_TMP_InputField_TextSelectionEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_InputField.TouchScreenKeyboardEvent), TMPro_TMP_InputField_TouchScreenKeyboardEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TMPro.TMP_Settings.LineBreakingTable), TMPro_TMP_Settings_LineBreakingTable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.InputManagerEntry), UnityEngine_InputManagerEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.InputRegistering), UnityEngine_InputRegistering_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.LightAnchor), UnityEngine_LightAnchor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.AnimationTriggers), UnityEngine_UI_AnimationTriggers_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button), UnityEngine_UI_Button_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ICanvasElement), UnityEngine_UI_ICanvasElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.CanvasUpdateRegistry), UnityEngine_UI_CanvasUpdateRegistry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ColorBlock), UnityEngine_UI_ColorBlock_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ClipperRegistry), UnityEngine_UI_ClipperRegistry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Clipping), UnityEngine_UI_Clipping_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IClipper), UnityEngine_UI_IClipper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IClippable), UnityEngine_UI_IClippable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Dropdown), UnityEngine_UI_Dropdown_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.FontData), UnityEngine_UI_FontData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.FontUpdateTracker), UnityEngine_UI_FontUpdateTracker_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Graphic), UnityEngine_UI_Graphic_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.GraphicRaycaster), UnityEngine_UI_GraphicRaycaster_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.GraphicRegistry), UnityEngine_UI_GraphicRegistry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Image), UnityEngine_UI_Image_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IMaskable), UnityEngine_UI_IMaskable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField), UnityEngine_UI_InputField_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.AspectRatioFitter), UnityEngine_UI_AspectRatioFitter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.CanvasScaler), UnityEngine_UI_CanvasScaler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ContentSizeFitter), UnityEngine_UI_ContentSizeFitter_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.GridLayoutGroup), UnityEngine_UI_GridLayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.HorizontalLayoutGroup), UnityEngine_UI_HorizontalLayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.HorizontalOrVerticalLayoutGroup), UnityEngine_UI_HorizontalOrVerticalLayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutElement), UnityEngine_UI_ILayoutElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutController), UnityEngine_UI_ILayoutController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutGroup), UnityEngine_UI_ILayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutSelfController), UnityEngine_UI_ILayoutSelfController_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ILayoutIgnorer), UnityEngine_UI_ILayoutIgnorer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.LayoutElement), UnityEngine_UI_LayoutElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.LayoutGroup), UnityEngine_UI_LayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.LayoutRebuilder), UnityEngine_UI_LayoutRebuilder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.LayoutUtility), UnityEngine_UI_LayoutUtility_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.VerticalLayoutGroup), UnityEngine_UI_VerticalLayoutGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Mask), UnityEngine_UI_Mask_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.MaskableGraphic), UnityEngine_UI_MaskableGraphic_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.MaskUtilities), UnityEngine_UI_MaskUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IMaterialModifier), UnityEngine_UI_IMaterialModifier_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Navigation), UnityEngine_UI_Navigation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.RawImage), UnityEngine_UI_RawImage_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.RectMask2D), UnityEngine_UI_RectMask2D_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Scrollbar), UnityEngine_UI_Scrollbar_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ScrollRect), UnityEngine_UI_ScrollRect_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Selectable), UnityEngine_UI_Selectable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Slider), UnityEngine_UI_Slider_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.SpriteState), UnityEngine_UI_SpriteState_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.StencilMaterial), UnityEngine_UI_StencilMaterial_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Text), UnityEngine_UI_Text_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Toggle), UnityEngine_UI_Toggle_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ToggleGroup), UnityEngine_UI_ToggleGroup_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.VertexHelper), UnityEngine_UI_VertexHelper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.BaseMeshEffect), UnityEngine_UI_BaseMeshEffect_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.IMeshModifier), UnityEngine_UI_IMeshModifier_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Outline), UnityEngine_UI_Outline_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.PositionAsUV1), UnityEngine_UI_PositionAsUV1_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Shadow), UnityEngine_UI_Shadow_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button.ButtonClickedEvent), UnityEngine_UI_Button_ButtonClickedEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.DefaultControls.IFactoryControls), UnityEngine_UI_DefaultControls_IFactoryControls_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.DefaultControls.Resources), UnityEngine_UI_DefaultControls_Resources_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Dropdown.OptionData), UnityEngine_UI_Dropdown_OptionData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Dropdown.OptionDataList), UnityEngine_UI_Dropdown_OptionDataList_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Dropdown.DropdownEvent), UnityEngine_UI_Dropdown_DropdownEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField.SubmitEvent), UnityEngine_UI_InputField_SubmitEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField.EndEditEvent), UnityEngine_UI_InputField_EndEditEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField.OnChangeEvent), UnityEngine_UI_InputField_OnChangeEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.MaskableGraphic.CullStateChangedEvent), UnityEngine_UI_MaskableGraphic_CullStateChangedEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Scrollbar.ScrollEvent), UnityEngine_UI_Scrollbar_ScrollEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.ScrollRect.ScrollRectEvent), UnityEngine_UI_ScrollRect_ScrollRectEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Slider.SliderEvent), UnityEngine_UI_Slider_SliderEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Toggle.ToggleEvent), UnityEngine_UI_Toggle_ToggleEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(GameConfig), GameConfig_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(GameEntry), GameEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(HotReloadTypeScripts), HotReloadTypeScripts_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(MediaManager), MediaManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUIPatch), FairyGUIPatch_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(XUILoader), XUILoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(IUIModel), IUIModel_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(IUIParams), IUIParams_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(StringParams), StringParams_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UIWidget), UIWidget_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(JsManager), JsManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(PuertsLoader), PuertsLoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(ResourcesManager), ResourcesManager_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(SuperText), SuperText_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(SetCursor), SetCursor_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(ShaderoPlus_SlicedAutoSize), ShaderoPlus_SlicedAutoSize_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.Attributes.CharsDisplayTimeAttribute), Febucci_Attributes_CharsDisplayTimeAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.Attributes.MinValueAttribute), Febucci_Attributes_MinValueAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.Attributes.NotZeroAttribute), Febucci_Attributes_NotZeroAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.Attributes.PositiveValueAttribute), Febucci_Attributes_PositiveValueAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.TAnimTags), Febucci_UI_TAnimTags_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.TypewriterAction), Febucci_UI_TypewriterAction_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.TextAnimator), Febucci_UI_TextAnimator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.TextAnimatorPlayer), Febucci_UI_TextAnimatorPlayer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Examples.AppearanceTemplate), Febucci_UI_Examples_AppearanceTemplate_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Examples.BehaviorTemplate), Febucci_UI_Examples_BehaviorTemplate_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Examples.DefaultEffectsExample), Febucci_UI_Examples_DefaultEffectsExample_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Examples.EffectsTesting), Febucci_UI_Examples_EffectsTesting_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Examples.EventExample), Febucci_UI_Examples_EventExample_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Examples.UsageExample), Febucci_UI_Examples_UsageExample_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Examples.SetTextOnEnable), Febucci_UI_Examples_SetTextOnEnable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.CharacterData), Febucci_UI_Core_CharacterData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.EffectInfoAttribute), Febucci_UI_Core_EffectInfoAttribute_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.EffectsBase), Febucci_UI_Core_EffectsBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.AppearanceDefaultValues), Febucci_UI_Core_AppearanceDefaultValues_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.BehaviorDefaultValues), Febucci_UI_Core_BehaviorDefaultValues_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.BuiltinAppearancesDataScriptable), Febucci_UI_Core_BuiltinAppearancesDataScriptable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.BuiltinBehaviorsDataScriptable), Febucci_UI_Core_BuiltinBehaviorsDataScriptable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.TAnim_EditorHelper), Febucci_UI_Core_TAnim_EditorHelper_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.TAnimBuilder), Febucci_UI_Core_TAnimBuilder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.TAnimGlobalDataScriptable), Febucci_UI_Core_TAnimGlobalDataScriptable_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.CharacterEvent), Febucci_UI_Core_CharacterEvent_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.TAnimPlayerBase), Febucci_UI_Core_TAnimPlayerBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.FormatUtils), Febucci_UI_Core_FormatUtils_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.TextUtilities), Febucci_UI_Core_TextUtilities_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.Tween), Febucci_UI_Core_Tween_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.AppearanceBase), Febucci_UI_Core_AppearanceBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.BehaviorBase), Febucci_UI_Core_BehaviorBase_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.BehaviorSine), Febucci_UI_Core_BehaviorSine_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.ByteBuffer), FairyGUI_Utils_ByteBuffer_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlButton), FairyGUI_Utils_HtmlButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlElement), FairyGUI_Utils_HtmlElement_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlImage), FairyGUI_Utils_HtmlImage_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlInput), FairyGUI_Utils_HtmlInput_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlLink), FairyGUI_Utils_HtmlLink_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlPageContext), FairyGUI_Utils_HtmlPageContext_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlParseOptions), FairyGUI_Utils_HtmlParseOptions_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlParser), FairyGUI_Utils_HtmlParser_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.HtmlSelect), FairyGUI_Utils_HtmlSelect_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.IHtmlObject), FairyGUI_Utils_IHtmlObject_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.IHtmlPageContext), FairyGUI_Utils_IHtmlPageContext_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.ToolSet), FairyGUI_Utils_ToolSet_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.UBBParser), FairyGUI_Utils_UBBParser_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.XML), FairyGUI_Utils_XML_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.XMLIterator), FairyGUI_Utils_XMLIterator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.XMLList), FairyGUI_Utils_XMLList_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.XMLUtils), FairyGUI_Utils_XMLUtils_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.ZipReader), FairyGUI_Utils_ZipReader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DefaultNamespace.Test), DefaultNamespace_Test_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(TopBar.TopBarBinder), TopBar_TopBarBinder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Title.TitleBinder), Title_TitleBinder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Title.View_Title), Title_View_Title_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Seeds.SeedsBinder), Seeds_SeedsBinder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Seeds.View_Seeds), Seeds_View_Seeds_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(MainMenuPanel.MainMenuPanelBinder), MainMenuPanel_MainMenuPanelBinder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.CommonBinder), Common_CommonBinder_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.View_Animation), Common_View_Animation_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.View_CancelButton), Common_View_CancelButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.View_CharacterButton), Common_View_CharacterButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.View_ConfirmButton), Common_View_ConfirmButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.View_LeftButton), Common_View_LeftButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.View_NoButton), Common_View_NoButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.View_RightButton), Common_View_RightButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Common.View_YesButton), Common_View_YesButton_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Panthea.UI.UIKit), Panthea_UI_UIKit_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(DreamLib.Unity.UI.FairyGUIExtension.FairyGUIExtension), DreamLib_Unity_UI_FairyGUIExtension_FairyGUIExtension_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(MediaManager.Callback), MediaManager_Callback_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(MediaManager.VoicePool), MediaManager_VoicePool_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.TextAnimator.TimeData), Febucci_UI_TextAnimator_TimeData_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.AppearanceDefaultValues.Defaults), Febucci_UI_Core_AppearanceDefaultValues_Defaults_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Febucci.UI.Core.BehaviorDefaultValues.Defaults), Febucci_UI_Core_BehaviorDefaultValues_Defaults_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.XMLList.Enumerator), FairyGUI_Utils_XMLList_Enumerator_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(FairyGUI.Utils.ZipReader.ZipEntry), FairyGUI_Utils_ZipReader_ZipEntry_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puerts.JsEnv), Puerts_JsEnv_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Puerts.ILoader), Puerts_ILoader_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Delegate), System_Delegate_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Object), System_Object_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Type), System_Type_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.UnityWebRequest), UnityEngine_Networking_UnityWebRequest_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.DownloadHandlerAudioClip), UnityEngine_Networking_DownloadHandlerAudioClip_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.DownloadHandlerTexture), UnityEngine_Networking_DownloadHandlerTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.UnityWebRequestTexture), UnityEngine_Networking_UnityWebRequestTexture_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.DownloadHandler), UnityEngine_Networking_DownloadHandler_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.IO.DirectoryInfo), System_IO_DirectoryInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.IO.FileInfo), System_IO_FileInfo_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.IO.Directory), System_IO_Directory_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.IO.File), System_IO_File_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Text.Encoding), System_Text_Encoding_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Array), System_Array_Wrap.GetRegisterInfo);
                
            jsEnv.AddLazyStaticWrapLoader(typeof(Cysharp.Threading.Tasks.UniTask), Cysharp_Threading_Tasks_UniTask_Wrap.GetRegisterInfo);
                
        }
    }
}