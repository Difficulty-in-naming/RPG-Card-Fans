using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;
namespace _ShaderoShaderEditorFramework
{
    [Node(false, "RGBA/FX/Damage Incrustation Tint")]
    public class DamageIncrustationTint : Node
    {
        [HideInInspector]
        public const string ID = "DamageIncrustationTint";
        [HideInInspector]
        public override string GetID { get { return ID; } }
        [HideInInspector]
        public float Variable = 1f;
        [HideInInspector]
        public float Variable2 = 1f;
        [HideInInspector]
        public float Variable3 = 0f;
        [HideInInspector]
        public float Variable4 = 0f;
        [HideInInspector]
        public Color Variable5 = new Color(0,1,0,1);

        public static int count = 1;
        public static bool tag = false;
        public static string code;

        [HideInInspector]
        public bool parametersOK = true;

        public static void Init()
        {
            tag = false;
            count = 1;
        }
        public void Function()
        {
            code = "";
            code += "float4 DamageIncrustationTint(float2 uv, float4 origin, sampler2D txt, float blend, float zoom, float posx, float posy, float4 color)\n";
            code += "{\n";
            code += "float2 center = float2(0.5-posx*0.5, 0.5-posy*0.5);\n";
            code += "uv -= center;\n";
            code += "uv *= zoom;\n";
            code += "uv += center;\n";
            code += "uv += float2(posx, posy);\n";
            code += "float4 overlay = tex2D(txt, saturate(uv));\n";
            code += "float tx = dot(overlay.rgb,1);\n";
            code += "overlay = float4(tx,tx,tx,overlay.a)*color;\n";
            code += "float4 o = origin;\n";
            code += "o.a = overlay.a + origin.a * (1 - overlay.a);\n";
            code += "o.rgb = (overlay.rgb * overlay.a + origin.rgb * origin.a * (1 - overlay.a)) / (o.a + 0.0000001);\n";
            code += "o.a = saturate(o.a*origin.a);\n";
            code += "o = lerp(origin, o, blend);\n";
            code += "return o;\n";
            code += "}\n";
        }


        public override Node Create(Vector2 pos)
        {
            Function();
            DamageIncrustationTint node = ScriptableObject.CreateInstance<DamageIncrustationTint>();

            node.name = "Damage Incrustation Tint";
            node.rect = new Rect(pos.x, pos.y, 172, 450);
            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("Source", "SuperSource");
            node.CreateInput("RGBA", "SuperFloat4");
            node.CreateOutput("RGBA", "SuperFloat4");

            return node;
        }

        protected internal override void NodeGUI()
        {


            Texture2D preview = ResourceManager.LoadTexture("Textures/previews/nid_damagetint.jpg");
            GUI.DrawTexture(new Rect(2, 0, 172, 46), preview);
            GUILayout.Space(50);

            GUILayout.BeginHorizontal();
            Inputs[0].DisplayLayout(new GUIContent("UV", "UV"));
            Outputs[0].DisplayLayout(new GUIContent("RGBA", "RGBA"));
            GUILayout.EndHorizontal();

            Inputs[1].DisplayLayout(new GUIContent("Source", "Source"));
            Inputs[2].DisplayLayout(new GUIContent("RGBA", "RGBA"));

            if (GUILayout.Button("Reset"))
            {
                Variable = 1f;
                Variable2 = 1f;
                Variable3 = 0f;
                Variable4 = 0f;
                Variable5 = new Color(0,1,0,1);
            }


            parametersOK = GUILayout.Toggle(parametersOK, "Add Parameter");

            // Paramaters
            if (NodeEditor._Shadero_Material != null)
            {
                NodeEditor._Shadero_Material.SetFloat(FinalVariable, Variable);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable2, Variable2);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable3, Variable3);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable4, Variable4);
                NodeEditor._Shadero_Material.SetColor(FinalVariable5, Variable5);

            }
            GUILayout.Label("Blend: (0 to 1) " + Variable.ToString("0.00"));
            Variable =HorizontalSlider(Variable, 0, 1);
            GUILayout.Label("Zoom: (0 to 8) " + Variable2.ToString("0.00"));
            Variable2 =HorizontalSlider(Variable2, 0, 8);
            GUILayout.Label("PosX: (-2 to 2) " + Variable3.ToString("0.00"));
            Variable3 = HorizontalSlider(Variable3, -2, 2f);
            GUILayout.Label("PosY: (-2 to 2) " + Variable4.ToString("0.00"));
            Variable4 =HorizontalSlider(Variable4, -2, 2f);
            GUILayout.Label("Color: ");
            Variable5 = EditorGUILayout.ColorField("", Variable5);




        }
        private string FinalVariable;
        private string FinalVariable2;
        private string FinalVariable3;
        private string FinalVariable4;
        private string FinalVariable5;

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
            SuperSource s_in2 = Inputs[1].GetValue<SuperSource>();
            SuperFloat4 s_in3 = Inputs[2].GetValue<SuperFloat4>();
            SuperFloat4 s_out = new SuperFloat4();


            string NodeCount = MemoCount.ToString(); 
            string DefaultName = "_DamageIncrustationTint_" + NodeCount;
            string DefaultNameVariable1 = "_DamageIncrustationTint_blend_" + NodeCount;
            string DefaultNameVariable2 = "_DamageIncrustationTint_zoom_" + NodeCount;
            string DefaultNameVariable3 = "_DamageIncrustationTint_posx_" + NodeCount;
            string DefaultNameVariable4 = "_DamageIncrustationTint_posy_" + NodeCount;
            string DefaultNameVariable5 = "_DamageIncrustationTint_color_" + NodeCount;
            string DefaultParameters1 = ", Range(0, 1)) = " + Variable.ToString();
            string DefaultParameters2 = ", Range(0, 8)) = " + Variable2.ToString();
            string DefaultParameters3 = ", Range(-2, 2)) = " + Variable3.ToString();
            string DefaultParameters4 = ", Range(-2, 2)) = " + Variable4.ToString();
            string DefaultParameters5 = ", COLOR) = (" + Variable5.r + "," + Variable5.g + "," + Variable5.b + "," + Variable5.a + ")";
            string uv = s_in.Result;
            string Source = "";
            string Text = "";
            FinalVariable = DefaultNameVariable1;
            FinalVariable2 = DefaultNameVariable2;
            FinalVariable3 = DefaultNameVariable3;
            FinalVariable4 = DefaultNameVariable4;
            FinalVariable5 = DefaultNameVariable5;

            // uv
            if (s_in2.Result == null)
            {
                Source = "_MainTex";
            }
            else
            {
                Source = s_in2.Result;
            }

            // uv
            if (s_in3.Result == null)
            {
                Text = "float4(0,0,0,0)";
            }
            else
            {
                Text = s_in3.Result;
            }

            // source
            if (s_in.Result == null)
            {
                uv = "i.texcoord";
                if (Source == "_MainTex") uv = "i.texcoord";
                if (Source == "_GrabTexture") uv = "i.screenuv";
            }
            else
            {
                uv = s_in.Result;
            }

            s_out.StringPreviewLines = s_in.StringPreviewNew + s_in2.StringPreviewNew + s_in3.StringPreviewNew;
            if (parametersOK)
            {
                s_out.ValueLine = "float4 " + DefaultName + " = DamageIncrustationTint(" + uv + "," + Text + "," + Source + "," + DefaultNameVariable1 + "," + DefaultNameVariable2 + "," + DefaultNameVariable3 + "," + DefaultNameVariable4 + "," + DefaultNameVariable5 + ");\n";
            }
            else
            {
                s_out.ValueLine = "float4 " + DefaultName + " = DamageIncrustationTint(" + uv + "," + Text + "," + Source + "," + Variable.ToString() + "," + Variable2.ToString() + "," + Variable3.ToString() + "," + Variable4.ToString() + ", float4(" + Variable5.r.ToString() + "," + Variable5.g.ToString() + "," + Variable5.b.ToString() + "," + Variable5.a.ToString() + ")" + ");\n";
            }

            s_out.StringPreviewNew = s_out.StringPreviewLines + s_out.ValueLine;
            s_out.ParametersLines += s_in.ParametersLines + s_in2.ParametersLines + s_in3.ParametersLines;

            s_out.Result = DefaultName;

            s_out.ParametersDeclarationLines += s_in.ParametersDeclarationLines + s_in2.ParametersDeclarationLines + s_in3.ParametersDeclarationLines;
            if (parametersOK)
            {
                s_out.ParametersLines += DefaultNameVariable1 + "(\"" + DefaultNameVariable1 + "\"" + DefaultParameters1 + "\n";
                s_out.ParametersLines += DefaultNameVariable2 + "(\"" + DefaultNameVariable2 + "\"" + DefaultParameters2 + "\n";
                s_out.ParametersLines += DefaultNameVariable3 + "(\"" + DefaultNameVariable3 + "\"" + DefaultParameters3 + "\n";
                s_out.ParametersLines += DefaultNameVariable4 + "(\"" + DefaultNameVariable4 + "\"" + DefaultParameters4 + "\n";
                s_out.ParametersLines += DefaultNameVariable5 + "(\"" + DefaultNameVariable5 + "\"" + DefaultParameters5 + "\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable1 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable2 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable3 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable4 + ";\n";
                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable5 + ";\n";
            }

            Outputs[0].SetValue<SuperFloat4>(s_out);

            count++;
            return true;
        }
    }
}