
using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;
namespace _ShaderoShaderEditorFramework
{
    [Node(false, "Tools/Generate a Atlas Textured UV")]
    public class GenerateAtlasTextureUV : Node
    {
        public const string ID = "GenerateAtlasTextureUV";
        public override string GetID { get { return ID; } }
        public static Texture2D tex;
        public static Shader shader;
        public static int count = 1;
        public static bool tag = false;
        public static string code;
        public static int Used = 2;
       [HideInInspector]
        [Multiline(150)]
        public string result;
     
        [HideInInspector]
        public int backpreview = 0;

        public static void Init()
        {
            tag = false;
            count = 1;
        }
        [HideInInspector]
        public string ShaderString;
        public override Node Create(Vector2 pos)
        {
            GenerateAtlasTextureUV node = ScriptableObject.CreateInstance<GenerateAtlasTextureUV>();
            node.name = "Generate Atlas Texture UV";
            node.rect = new Rect(pos.x, pos.y, 198+150, 270);
             return node;

        }
        Rect[] getUVs(string path)
        {
            Rect[] uvs;
            TextureImporter importer = (TextureImporter)AssetImporter.GetAtPath(path);
            uvs = new Rect[importer.spritesheet.Length];
            for (int i = 0; i < uvs.Length; i++)
            {
                uvs[i] = importer.spritesheet[i].rect;
            }
            return uvs;
        }

        protected internal override void NodeGUI()
        {
            GUILayout.BeginHorizontal();
            GUILayout.EndHorizontal();
            tex = (Texture2D)EditorGUI.ObjectField(new Rect(8, 36, 130, 130), tex, typeof(Texture2D), true);

            if (tex != null)
            {
                     if (Node.ShaderNameX != "")
                    {
                        ShaderString = "Shadero Previews/GeneratedUV";

                        Rect[] GetUvs;
                        GetUvs = getUVs(AssetDatabase.GetAssetPath(tex));

                        int TextureSize = 256;

                        Material mat = Instantiate(NodeEditor._Shadero_Material);
                        mat.shader = Shader.Find(ShaderString);

                        RenderTexture rt = new RenderTexture(TextureSize, TextureSize, 26);

                        RenderTexture.active = rt;

                        mat.SetFloat("px1", 0);
                        mat.SetFloat("py1", 0);
                        mat.SetFloat("px2", 1);
                        mat.SetFloat("py2", 1);
                        Graphics.Blit(tex, rt, mat);

                        Texture2D destination_texture = new Texture2D(TextureSize, TextureSize);

                        destination_texture.ReadPixels(new Rect(0, 0, TextureSize, TextureSize), 0, 0);
                        destination_texture.Apply();

            

                        RenderTexture.active = null;

                        for (int c = 0; c < GetUvs.Length; c++)
                        {
                            float x1 = GetUvs[c].x / tex.width;
                            float y1 = GetUvs[c].y / tex.height;
                            float x2 = GetUvs[c].width / tex.width;
                            float y2 = GetUvs[c].height / tex.height;
                            mat.SetFloat("px1", x1);
                            mat.SetFloat("py1", y1);
                            mat.SetFloat("px2", x2 + x1);
                            mat.SetFloat("py2", y2 + y1);

                            RenderTexture.active = rt;

                            Graphics.Blit(destination_texture, rt, mat);

                            destination_texture.ReadPixels(new Rect(0, 0, TextureSize, TextureSize), 0, 0);
                            destination_texture.Apply();

                            RenderTexture.active = null;
                        }


                        EditorGUI.DrawPreviewTexture(new Rect(160, 36, 178, 179), destination_texture);

                        if (GUILayout.Button(new GUIContent("Save to PNG (256x256)", "Save the result to a Sprite file")))
                        {
                            string path = EditorUtility.SaveFilePanelInProject("Generate Atlas Texture UV", "AtlasTextureUV", "png", "", NodeEditor.editorPath + "Shadero_Projects/");
                            if (!string.IsNullOrEmpty(path))
                            {
                                byte[] bs = destination_texture.EncodeToPNG();
                                File.WriteAllBytes(path, bs);
                            }
                        }

                        DestroyImmediate(mat);

                }


            }
        }
        private string FinalVariable;


        public override bool Calculate()
        {
            // RGBA
            //SuperFloat4 s_in = Inputs[0].GetValue<SuperFloat4>();

            //if (s_in.Result != null)
            //{
                ShaderString = "Shadero Previews/GenerateXWWSXQ" + count;
           // }
            /*
            SuperFloat4 s_out = new SuperFloat4();
            string PreviewVariable = s_in.Result;
            s_out.StringPreviewLines = s_in.StringPreviewNew;
            s_out.ValueLine = "";
            s_out.StringPreviewNew = s_out.StringPreviewLines + s_out.ValueLine;
            s_out.Result = PreviewVariable;
            s_out.ParametersLines += s_in.ParametersLines;
            s_out.ParametersDeclarationLines += s_in.ParametersDeclarationLines;
            Outputs[0].SetValue<SuperFloat4>(s_out);
            */
            count++;
            return true;
        }
    }
}