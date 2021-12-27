using UnityEngine;
using UnityEditor;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;
namespace _ShaderoShaderEditorFramework
{
    [Node(false, "RGBA/Gradient/Palette 4 Swapping")]
    public class Palette4Swapping : Node
    {
        [HideInInspector]
        public const string ID = "Palette4Swapping";
        [HideInInspector]
        public override string GetID { get { return ID; } }
        [HideInInspector]
        public Color Variable = new Color(0.2f, 0.11f, 0.08f, 1);
        [HideInInspector]
        public Color Variable2 = new Color(0.67f, 0.56f, 0.36f, 1);
        [HideInInspector]
        public Color Variable3 = new Color(0.23f, 0.63f, 0.26f, 1);
        [HideInInspector]
        public Color Variable4 = new Color(1, 0.97f, 0.84f, 1);


        [HideInInspector]
        public bool parametersOK = true;

        public static int count = 1;
        public static bool tag = false;
        public static string code;


        public static void Init()
        {
            tag = false;
            count = 1;
        }


        public void Function()
        {
            code = "";
            code += "float4 Palette4Swap(float4 txt, float2 uv, float4 col1, float4 col2, float4 col3, float4 col4)\n";
            code += "{\n";
            code += "float4 c1 = col1;\n";
            code += "if (txt.r>0.25) c1 = col2;\n";
            code += "if (txt.r>0.50) c1 = col3;\n";
            code += "if (txt.r>0.75) c1 = col4;\n";
            code += "c1.a = txt.a;\n";
            code += "return c1;\n";
            code += "}\n";
        }


        public override Node Create(Vector2 pos)
        {
            Function();
            Palette4Swapping node = ScriptableObject.CreateInstance<Palette4Swapping>();
            node.name = "Palette 4 Swapping";
            node.rect = new Rect(pos.x, pos.y, 172, 280);
            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("RGBA", "SuperFloat4");
            node.CreateOutput("RGBA", "SuperFloat4");

            return node;
        }

        protected internal override void NodeGUI()
        {
            // Create Big Palette
            Texture2D colorpicker = new Texture2D(4, 2);
            colorpicker.filterMode = FilterMode.Point;
            colorpicker.wrapMode = TextureWrapMode.Clamp;


            colorpicker.SetPixel(0, 0, Variable);
            colorpicker.SetPixel(1, 0, Variable2);
            colorpicker.SetPixel(2, 0, Variable3);
            colorpicker.SetPixel(3, 0, Variable4);
            colorpicker.SetPixel(0, 1, new Color(0, 0, 0, 1));
            colorpicker.SetPixel(1, 1, new Color(0.25f, 0.25f, 0.25f, 1));
            colorpicker.SetPixel(2, 1, new Color(0.5f, 0.5f, 0.5f, 1));
            colorpicker.SetPixel(3, 1, new Color(0.75f, 0.75f, 0.75f, 1));
            colorpicker.Apply();

            GUI.DrawTextureWithTexCoords(new Rect(2, 0, 172, 46), colorpicker, new Rect(0.1f, 0.0f, 0.85f, 1.0f));
            DestroyImmediate(colorpicker);
            GUILayout.Space(50);
            GUILayout.BeginHorizontal();
            Inputs[0].DisplayLayout(new GUIContent("UV", "UV"));
            Outputs[0].DisplayLayout(new GUIContent("RGBA", "RGBA"));
            GUILayout.EndHorizontal();
            Inputs[1].DisplayLayout(new GUIContent("RGBA", "RGBA"));

            parametersOK = GUILayout.Toggle(parametersOK, "Add Parameter");





            if (GUILayout.Button("Reset"))
            {
                Variable = new Color(0.2f, 0.11f, 0.08f, 1);
                Variable2 = new Color(0.67f, 0.56f, 0.36f, 1);
                Variable3 = new Color(0.23f, 0.63f, 0.26f, 1);
                Variable4 = new Color(1, 0.97f, 0.84f, 1);

            }

            if (NodeEditor._Shadero_Material != null)
            {
                NodeEditor._Shadero_Material.SetColor(FinalVariable, Variable);
                NodeEditor._Shadero_Material.SetColor(FinalVariable2, Variable2);
                NodeEditor._Shadero_Material.SetColor(FinalVariable3, Variable3);
                NodeEditor._Shadero_Material.SetColor(FinalVariable4, Variable4);
            }
            GUILayout.Space(10);

            Variable = EditorGUILayout.ColorField("", Variable);
            Variable2 = EditorGUILayout.ColorField("", Variable2);
            Variable3 = EditorGUILayout.ColorField("", Variable3);
            Variable4 = EditorGUILayout.ColorField("", Variable4);

            GUILayout.Space(10);



        }

        private string FinalVariable;
        private string FinalVariable2;
        private string FinalVariable3;
        private string FinalVariable4;

        [HideInInspector]
        public int MemoCount = -1;
        public override bool FixCalculate()
        {
            MemoCount = count;
            count++;
            return true;
        }

        public override bool Calculate()
        {
            tag = true;

            SuperFloat2 s_in = Inputs[0].GetValue<SuperFloat2>();
            SuperFloat4 s_in2 = Inputs[1].GetValue<SuperFloat4>();
            SuperFloat4 s_out = new SuperFloat4();

            string NodeCount = MemoCount.ToString();
            string DefaultName = "_Palette4Swapping_" + NodeCount;
            string DefaultNameVariable1 = "_Palette4Swapping_Color1_" + NodeCount;
            string DefaultNameVariable2 = "_Palette4Swapping_Color2_" + NodeCount;
            string DefaultNameVariable3 = "_Palette4Swapping_Color3_" + NodeCount;
            string DefaultNameVariable4 = "_Palette4Swapping_Color4_" + NodeCount;
            string DefaultParameters1 = ", COLOR) = (" + Variable.r + "," + Variable.g + "," + Variable.b + "," + Variable.a + ")";
            string DefaultParameters2 = ", COLOR) = (" + Variable2.r + "," + Variable2.g + "," + Variable2.b + "," + Variable2.a + ")";
            string DefaultParameters3 = ", COLOR) = (" + Variable3.r + "," + Variable3.g + "," + Variable3.b + "," + Variable3.a + ")";
            string DefaultParameters4 = ", COLOR) = (" + Variable4.r + "," + Variable4.g + "," + Variable4.b + "," + Variable4.a + ")";
            string uv = s_in.Result;
            string rgba = s_in2.Result;

            FinalVariable = DefaultNameVariable1;
            FinalVariable2 = DefaultNameVariable2;
            FinalVariable3 = DefaultNameVariable3;
            FinalVariable4 = DefaultNameVariable4;


            if (s_in2.Result == null)
            {
                rgba = "float4(0,0,0,1)";
            }
            // source
            if (s_in.Result == null)
            {
                uv = "i.texcoord";
            }
            else
            {
                uv = s_in.Result;
            }

            s_out.StringPreviewLines = s_in.StringPreviewNew + s_in2.StringPreviewNew;
            if (parametersOK)
            {
                s_out.ValueLine = "float4 " + DefaultName + " = Palette4Swap(" + rgba + "," + uv + "," + DefaultNameVariable1 + "," + DefaultNameVariable2 + "," + DefaultNameVariable3 + "," + DefaultNameVariable4 + ");\n";
            }
            else
            {
                DefaultNameVariable1 = "float4(" + Variable.r + "," + Variable.g + "," + Variable.b + "," + Variable.a + ")";
                DefaultNameVariable2 = "float4(" + Variable2.r + "," + Variable2.g + "," + Variable2.b + "," + Variable2.a + ")";
                DefaultNameVariable3 = "float4(" + Variable3.r + "," + Variable3.g + "," + Variable3.b + "," + Variable3.a + ")";
                DefaultNameVariable4 = "float4(" + Variable4.r + "," + Variable4.g + "," + Variable4.b + "," + Variable4.a + ")";
                s_out.ValueLine = "float4 " + DefaultName + " = Palette4Swap(" + rgba + "," + uv + "," + DefaultNameVariable1 + "," + DefaultNameVariable2 + "," + DefaultNameVariable3 + "," + DefaultNameVariable4 + ");\n";
            }
            s_out.StringPreviewNew = s_out.StringPreviewLines + s_out.ValueLine;
            s_out.ParametersLines += s_in.ParametersLines + s_in2.ParametersLines;
            s_out.Result = DefaultName;
            s_out.ParametersDeclarationLines += s_in.ParametersDeclarationLines + s_in2.ParametersDeclarationLines;
            if (parametersOK)
            {
                s_out.ParametersLines += DefaultNameVariable1 + "(\"" + DefaultNameVariable1 + "\"" + DefaultParameters1 + "\n";
                s_out.ParametersLines += DefaultNameVariable2 + "(\"" + DefaultNameVariable2 + "\"" + DefaultParameters2 + "\n";
                s_out.ParametersLines += DefaultNameVariable3 + "(\"" + DefaultNameVariable3 + "\"" + DefaultParameters3 + "\n";
                s_out.ParametersLines += DefaultNameVariable4 + "(\"" + DefaultNameVariable4 + "\"" + DefaultParameters4 + "\n";

                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable1 + ";\n";
                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable2 + ";\n";
                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable3 + ";\n";
                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable4 + ";\n";
            }

            Outputs[0].SetValue<SuperFloat4>(s_out);

            count++;
            return true;
        }
    }
}