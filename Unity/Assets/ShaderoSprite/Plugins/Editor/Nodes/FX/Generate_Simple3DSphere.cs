using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;
namespace _ShaderoShaderEditorFramework
{
    [Node(false, "RGBA/Generate/3D/Simple Spherize")]
    public class Generate_Simple3DSphere : Node
    {
        [HideInInspector]
        public const string ID = "Generate_Simple3DSphere";
        [HideInInspector]
        public override string GetID { get { return ID; } }
        [HideInInspector]
        public float Variable = 0.0f;
        [HideInInspector]
        public float Variable2 = -1.0f;

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
            code += "float4 SimpleGenerate3DSpherize(sampler2D txt, float2 uvx, float2 uv, float2 speed)\n";
            code += "{\n";
            code += "speed *= _Time;\n";
            code += "float3 pos = float3(uv - float2(0.5, 0.5), 0);\n";
            code += "float3 pos2 = float3(uvx - float2(0.5, 0.5), 0);\n";
            code += "float z_Square = 0.25 - dot(pos.xy, pos.xy);\n";
            code += "if (z_Square <= -.0) return float4(.0, .0, .0, .0);\n";
            code += "pos.z = sqrt(z_Square);\n";
            code += "pos = mul(pos, float3x3(cos(speed.y), sin(speed.y) * sin(speed.x), sin(speed.y) * cos(speed.x), 0,\n";
            code += "cos(speed.x), -sin(speed.x), -sin(speed.y), cos(speed.y) * sin(speed.x), cos(speed.y) * cos(speed.x)));\n";
            code += "float lon = atan(pos.x / pos.z);\n";
            code += "lon -= 3.141592 * step(pos.z, .0);\n";
            code += "float lat = acos(pos.y / 0.5);\n";
            code += "float2 uv2 = float2(lon, lat) / float2(3.14, -3.14);\n";
            code += "float4 emission = tex2D(txt, uv2);\n";
            code += "return emission;\n";
            code += "}\n";
        }


        public override Node Create(Vector2 pos)
        {
            Function();

            Generate_Simple3DSphere node = ScriptableObject.CreateInstance<Generate_Simple3DSphere>();

            node.name = "Generate Simple 3D Sphere";
            node.rect = new Rect(pos.x, pos.y, 180, 300);

            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("Source", "SuperSource");
            node.CreateOutput("RGBA", "SuperFloat4");

            return node;
        }

        protected internal override void NodeGUI()
        {


            Texture2D preview = ResourceManager.LoadTexture("Textures/previews/nid-generate3dsimplesphere.jpg");
            GUI.DrawTexture(new Rect(2, 0, 172, 46), preview);
            GUILayout.Space(50);

            GUILayout.BeginHorizontal();
            Inputs[0].DisplayLayout(new GUIContent("UV Sphere", "UV"));
            Outputs[0].DisplayLayout(new GUIContent("RGBA", "RGBA"));
            GUILayout.EndHorizontal();

            Inputs[1].DisplayLayout(new GUIContent("UV Texture", "UV"));
            Inputs[2].DisplayLayout(new GUIContent("Source", "Source"));

            if (GUILayout.Button("Reset"))
            {
                Variable = 0.0f;
                Variable2 = -1.0f;
            }


            parametersOK = GUILayout.Toggle(parametersOK, "Add Parameter");

            // Paramaters
            if (NodeEditor._Shadero_Material != null)
            {
                NodeEditor._Shadero_Material.SetFloat(FinalVariable, Variable);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable2, Variable2);

            }
            GUILayout.Label("Rot X : (-4 to 4) " + Variable2.ToString("0.00"));
            Variable2 = HorizontalSlider(Variable2, -4, 4);
            GUILayout.Label("Rot Y : (-4 to 4) " + Variable.ToString("0.00"));
            Variable = HorizontalSlider(Variable, -4, 4);

       




        }
        private string FinalVariable;
        private string FinalVariable2;
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
            SuperFloat2 s_in2 = Inputs[1].GetValue<SuperFloat2>();
            SuperSource s_in3 = Inputs[2].GetValue<SuperSource>();
            SuperFloat4 s_out = new SuperFloat4();


            string NodeCount = MemoCount.ToString();
            string DefaultName = "_GenerateSimple3DSphere_" + NodeCount;
            string DefaultNameVariable1 = "_GenerateSimple3DSphere_RotationY_" + NodeCount;
            string DefaultNameVariable2 = "_GenerateSimple3DSphere_RotationX_" + NodeCount;
            string DefaultParameters1 = ", Range(-4, 4)) = " + Variable.ToString();
            string DefaultParameters2 = ", Range(-4, 4)) = " + Variable2.ToString();
            string uv = s_in.Result;
            string uv2 = s_in2.Result;
            string Source = "";

            FinalVariable = DefaultNameVariable1;
            FinalVariable2 = DefaultNameVariable2;
      
            if (s_in3.Result == null)
            {
                Source = "_MainTex";
            }
            else
            {
                Source = s_in3.Result;
            }

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

            if (s_in2.Result == null)
            {
                uv2 = "i.texcoord";
                if (Source == "_MainTex") uv2 = "i.texcoord";
                if (Source == "_GrabTexture") uv2 = "i.screenuv";
            }
            else
            {
                uv2 = s_in2.Result;
            }

            s_out.StringPreviewLines = s_in.StringPreviewNew + s_in2.StringPreviewNew + s_in3.StringPreviewNew;
            if (parametersOK)
            {
                s_out.ValueLine = "float4 " + DefaultName + " = SimpleGenerate3DSpherize(" + Source + "," + uv + "," + uv2 + ", float2(" + DefaultNameVariable1 + "," + DefaultNameVariable2 + "));\n";
            }
            else
            {
                s_out.ValueLine = "float4 " + DefaultName + " = SimpleGenerate3DSpherize(" + Source + "," + uv + "," + uv2 + ", float2(" + Variable.ToString() + "," + Variable2.ToString() + "));\n";
            }
            s_out.StringPreviewNew = s_out.StringPreviewLines + s_out.ValueLine;
            s_out.ParametersLines += s_in.ParametersLines + s_in2.ParametersLines + s_in3.ParametersLines;

            s_out.Result = DefaultName;

            s_out.ParametersDeclarationLines += s_in.ParametersDeclarationLines + s_in2.ParametersDeclarationLines + s_in3.ParametersDeclarationLines;
            if (parametersOK)
            {
                s_out.ParametersLines += DefaultNameVariable1 + "(\"" + DefaultNameVariable1 + "\"" + DefaultParameters1 + "\n";
                s_out.ParametersLines += DefaultNameVariable2 + "(\"" + DefaultNameVariable2 + "\"" + DefaultParameters2 + "\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable1 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable2 + ";\n";
            }

            Outputs[0].SetValue<SuperFloat4>(s_out);

            count++;
            return true;
        }
    }
}