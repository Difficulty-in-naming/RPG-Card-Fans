using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;
namespace _ShaderoShaderEditorFramework
{
    [Node(false, "RGBA/Generate/3D/Spherize")]
    public class Generate_3DSphere : Node
    {
        [HideInInspector]
        public const string ID = "Generate_3DSphere";
        [HideInInspector]
        public override string GetID { get { return ID; } }
        [HideInInspector]
        public float Variable = 0.0f;
        [HideInInspector]
        public float Variable2 = -1.0f;
        [HideInInspector]
        public float Variable3 = 1.0f;
        [HideInInspector]
        public float Variable4 = 1.0f;
        [HideInInspector]
        public float Variable5 = 1.0f;
        [HideInInspector]
        public Color Variable6 = new Color(1, 1, 1, 0.2f);

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
            code += "float4 Generate3DSpherize(sampler2D txt, float2 uvx, float2 uv, float2 speed, float3 lightDir, float4 lightColor)\n";
            code += "{\n";
            code += "   speed *= _Time;\n";
            code += "	float3 pos = float3(uv-float2(0.5,0.5), 0);\n";
            code += "	float3 pos2 = float3(uvx-float2(0.5,0.5), 0);\n";
            code += "	float z_Square = 0.25 - dot(pos2.xy, pos2.xy);\n";
            code += "	if (z_Square <= .0) return float4(.0, .0, .0, .0);\n";
            code += "	pos.z = sqrt(z_Square);\n";
            code += "	float3 normalDir = normalize(pos - float3(0.0,0.0,0.0));\n";
            code += "	pos = mul(pos, float3x3(cos(speed.y), sin(speed.y) * sin(speed.x), sin(speed.y) * cos(speed.x), 0,\n";
            code += "	cos(speed.x), -sin(speed.x), -sin(speed.y), cos(speed.y) * sin(speed.x), cos(speed.y) * cos(speed.x)));\n";
            code += "	float lon = atan(pos.x / pos.z);\n";
            code += "	lon -= 3.1415926 * step(pos.z, .0);\n";
            code += "	float lat = acos(pos.y / 0.5);\n";
            code += "	float2 uv2 = float2(lon, lat) / float2(3.1415926, -3.1415926);\n";
            code += "	float4 emission = tex2D(txt, uv2);\n";
            code += "	float3 diffuse = (lightColor*lightColor.a) * max(0.0, dot(normalDir, lightDir));\n";
            code += "	float3 specular = lightColor * pow(max(0.0, dot(normalize(pos + lightDir), normalDir)), 3.0);\n";
            code += "	float3 color = emission.rgb + diffuse + specular;\n";
            code += "	return float4(color, emission.a);\n";
            code += "}\n";
        }


        public override Node Create(Vector2 pos)
        {
            Function();

            Generate_3DSphere node = ScriptableObject.CreateInstance<Generate_3DSphere>();

            node.name = "Generate 3D Sphere";
            node.rect = new Rect(pos.x, pos.y, 180, 485);

            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("Source", "SuperSource");
            node.CreateOutput("RGBA", "SuperFloat4");

            return node;
        }

        protected internal override void NodeGUI()
        {


            Texture2D preview = ResourceManager.LoadTexture("Textures/previews/nid-generate3dsphere.jpg");
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
                Variable3 = 1.0f;
                Variable4 = 1.0f;
                Variable5 = 1.0f;
                Variable6 = new Color(1, 1, 1, 0.2f);
            }


            parametersOK = GUILayout.Toggle(parametersOK, "Add Parameter");

            // Paramaters
            if (NodeEditor._Shadero_Material != null)
            {
                NodeEditor._Shadero_Material.SetFloat(FinalVariable, Variable);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable2, Variable2);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable3, Variable3);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable4, Variable4);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable5, Variable5);
                NodeEditor._Shadero_Material.SetColor(FinalVariable6, Variable6);

            }
            GUILayout.Label("Rot X : (-4 to 4) " + Variable2.ToString("0.00"));
            Variable2 = HorizontalSlider(Variable2, -4, 4);
            GUILayout.Label("Rot Y : (-4 to 4) " + Variable.ToString("0.00"));
            Variable = HorizontalSlider(Variable, -4, 4);

            GUILayout.Label("Light Direction");
            GUILayout.Label("X: " + Variable3.ToString("0.00"));
            Variable3 = HorizontalSlider(Variable3, -10, 10);
            GUILayout.Label("Y: " + Variable4.ToString("0.00"));
            Variable4 = HorizontalSlider(Variable4, -10, 10);
            GUILayout.Label("Z: " + Variable5.ToString("0.00"));
            Variable5 = HorizontalSlider(Variable5, -10, 10);

            GUILayout.Label("Light Color:");
            Variable6 = EditorGUILayout.ColorField("", Variable6);





        }
        private string FinalVariable;
        private string FinalVariable2;
        private string FinalVariable3;
        private string FinalVariable4;
        private string FinalVariable5;
        private string FinalVariable6;
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
            string DefaultName = "_Generate3DSphere_" + NodeCount;
            string DefaultNameVariable1 = "_Generate3DSphere_RotationY_" + NodeCount;
            string DefaultNameVariable2 = "_Generate3DSphere_RotationX_" + NodeCount;
            string DefaultNameVariable3 = "_Generate3DSphere_LightDirection_X_" + NodeCount;
            string DefaultNameVariable4 = "_Generate3DSphere_LightDirection_Y_" + NodeCount;
            string DefaultNameVariable5 = "_Generate3DSphere_LightDirection_Z_" + NodeCount;
            string DefaultNameVariable6 = "_Generate3DSphere_Light_Color_" + NodeCount;
            string DefaultParameters1 = ", Range(-4, 4)) = " + Variable.ToString();
            string DefaultParameters2 = ", Range(-4, 4)) = " + Variable2.ToString();
            string DefaultParameters3 = ", Range(-10, 10)) = " + Variable3.ToString();
            string DefaultParameters4 = ", Range(-10, 10)) = " + Variable4.ToString();
            string DefaultParameters5 = ", Range(-10, 10)) = " + Variable5.ToString();
            string DefaultParameters6 = ", COLOR) = (" + Variable6.r + "," + Variable6.g + "," + Variable6.b + "," + Variable6.a + ")";
            string uv = s_in.Result;
            string uv2 = s_in2.Result;
            string Source = "";

            FinalVariable = DefaultNameVariable1;
            FinalVariable2 = DefaultNameVariable2;
            FinalVariable3 = DefaultNameVariable3;
            FinalVariable4 = DefaultNameVariable4;
            FinalVariable5 = DefaultNameVariable5;
            FinalVariable6 = DefaultNameVariable6;
      
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
                s_out.ValueLine = "float4 " + DefaultName + " = Generate3DSpherize(" + Source + "," + uv + "," + uv2 + ", float2(" + DefaultNameVariable1 + "," + DefaultNameVariable2 + "),float3(" + DefaultNameVariable3 + "," + DefaultNameVariable4 + "," + DefaultNameVariable5 + ")," + DefaultNameVariable6 + ");\n";
            }
            else
            {
                string vcol = "float4(" + Variable6.r.ToString() + "," + Variable6.g.ToString() + "," + Variable6.b.ToString() + "," + Variable6.a.ToString() + ")";

                s_out.ValueLine = "float4 " + DefaultName + " = Generate3DSpherize(" + Source + "," + uv + "," + uv2 + ", float2(" + Variable.ToString() + "," + Variable2.ToString() + "),float3(" + Variable3.ToString() + "," + Variable4.ToString() + "," + Variable5.ToString() + ")," + vcol + ");\n";
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
                s_out.ParametersLines += DefaultNameVariable6 + "(\"" + DefaultNameVariable6 + "\"" + DefaultParameters6 + "\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable1 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable2 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable3 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable4 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable5 + ";\n";
                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable6 + ";\n";
            }

            Outputs[0].SetValue<SuperFloat4>(s_out);

            count++;
            return true;
        }
    }
}