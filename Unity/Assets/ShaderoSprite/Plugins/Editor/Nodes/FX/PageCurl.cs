using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;
namespace _ShaderoShaderEditorFramework
{
    [Node(false, "RGBA/FX/Page Curl")]
    public class PageCurl : Node
    {
        [HideInInspector]
        public const string ID = "PageCurl";
        [HideInInspector]
        public override string GetID { get { return ID; } }
        [HideInInspector]
        public float Variable = 0.98f;
        [HideInInspector]
        public float Variable2 = 0.2f;
        [HideInInspector]
        public float Variable3 = 0.2f;
        [HideInInspector]
        public float Variable4 = 1.5f;
       

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
            code += "float4 PageCurl(sampler2D txt, float2 uv, float m1, float m2, float radius, float Shadow)\n";
            code += "{\n";
            code += "float4 text = float4(0,0,0,1);\n";
            code += "float2 mouse = float2(m1, m1);\n";
            code += "float2 mdir = float2(m2, -0.2);\n";
            code += "float2 mouseDir = normalize(abs(mdir)*mdir);\n";
            code += "float2 origin = mouse-mdir;\n";
            code += "float mouseDist = origin;\n";
            code += "mouseDist = distance(mouse, origin);\n";
            code += "float proj = dot(uv - origin, mouseDir);\n";
            code += "float dist = proj - mouseDist;\n";
            code += "float2 linePoint = uv - dist * mouseDir;\n";
            code += "if (dist > radius)\n";
            code += "{\n";
            code += "text.a = 1 - pow(saturate(dist - radius) * 8.5, Shadow * 0.05);\n";
            code += "text.a *= tex2D(txt, uv).a;\n";
            code += "}\n";
            code += "else if (dist >= 0.)\n";
            code += "{\n";
            code += "float theta = asin(dist / radius);\n";
            code += "float2 p2 = linePoint + mouseDir * (3.1415 - theta) * radius;\n";
            code += "float2 p1 = linePoint + mouseDir * theta * radius;\n";
            code += "float px = 1;\n";
            code += "if ((p2.x < 0) || (p2.x > 1) || (p2.y < 0) || (p2.y > 1)) px = 0;\n";
            code += "float4 t1 = tex2D(txt, p1);\n";
            code += "float4 t2 = tex2D(txt, p2);\n";
            code += "t1 = lerp(float4(0, 0, 0, tex2D(txt, uv).a*Shadow * 0.125), t1, t1.a);\n";
            code += "text = lerp(float4(t1.rgb,t1.a), float4(t2.rgb,1), t2.a*px);\n";
            code += "text.rgb *= pow(saturate((radius - dist) / radius), .2);\n";
            code += "}\n";
            code += "else\n";
            code += "{\n";
            code += "float2 p = linePoint + mouseDir * (abs(dist) + 3.1415 * radius);\n";
            code += "float px = 1;\n";
            code += "if ((p.x < 0) || (p.x > 1) || (p.y < 0) || (p.y > 1)) px = 0;\n";
            code += "float4 t1 = tex2D(txt, uv);\n";
            code += "float4 t2 = tex2D(txt, p);\n";
            code += "text = lerp(float4(t1.rgb, t1.a), float4(t2.rgb, px), t2.a*px);\n";
            code += "text=saturate(text);\n";
            code += "}\n";
            code += "return saturate(text);\n";
            code += "}\n";
        }


        public override Node Create(Vector2 pos)
        {
            Function();
            PageCurl node = ScriptableObject.CreateInstance<PageCurl>();

            node.name = "Page Curl";
            node.rect = new Rect(pos.x, pos.y, 172, 370);
            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("Source", "SuperSource");
            node.CreateOutput("RGBA", "SuperFloat4");

            return node;
        }

        protected internal override void NodeGUI()
        {


            Texture2D preview = ResourceManager.LoadTexture("Textures/previews/nid_pagecurl.jpg");
            GUI.DrawTexture(new Rect(2, 0, 172, 46), preview);
            GUILayout.Space(50);

            GUILayout.BeginHorizontal();
            Inputs[0].DisplayLayout(new GUIContent("UV", "UV"));
            Outputs[0].DisplayLayout(new GUIContent("RGBA", "RGBA"));
            GUILayout.EndHorizontal();

            Inputs[1].DisplayLayout(new GUIContent("Source", "Source"));

            if (GUILayout.Button("Reset"))
            {
                Variable = 0.98f;
                Variable2 = 0.2f;
                Variable3 = 0.2f;
                Variable4 = 1.5f;
            }


            parametersOK = GUILayout.Toggle(parametersOK, "Add Parameter");

            // Paramaters
            if (NodeEditor._Shadero_Material != null)
            {
                NodeEditor._Shadero_Material.SetFloat(FinalVariable, Variable);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable2, Variable2);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable3, Variable3);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable4, Variable4);

            }
            GUILayout.Label("Mouvement: (-6 to 6) " + Variable.ToString("0.00"));
            Variable =HorizontalSlider(Variable, -6, 6);
            GUILayout.Label("Rotation: (-1 to 1) " + Variable2.ToString("0.00"));
            Variable2 =HorizontalSlider(Variable2, -1, 1);
            GUILayout.Label("Curve: (0 to 0.3) " + Variable3.ToString("0.00"));
            Variable3 = HorizontalSlider(Variable3, 0, 0.3f);
            GUILayout.Label("Shadow: (0 to 8) " + Variable4.ToString("0.00"));
            Variable4 =HorizontalSlider(Variable4, 0, 8);

    


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
            SuperSource s_in2 = Inputs[1].GetValue<SuperSource>();
            SuperFloat4 s_out = new SuperFloat4();


            string NodeCount = MemoCount.ToString();
            string DefaultName = "_PageCurl_" + NodeCount;
            string DefaultNameVariable1 = "_PageCurl_movement_" + NodeCount;
            string DefaultNameVariable2 = "_PageCurl_rotation_" + NodeCount;
            string DefaultNameVariable3 = "_PageCurl_Curve_" + NodeCount;
            string DefaultNameVariable4 = "_PageCurl_Shadow_" + NodeCount;
            string DefaultParameters1 = ", Range(-6, 6)) = " + Variable.ToString();
            string DefaultParameters2 = ", Range(-1, 1)) = " + Variable2.ToString();
            string DefaultParameters3 = ", Range(0, 0.3)) = " + Variable3.ToString();
            string DefaultParameters4 = ", Range(0, 8)) = " + Variable4.ToString();
            string uv = s_in.Result;
            string Source = "";

            FinalVariable = DefaultNameVariable1;
            FinalVariable2 = DefaultNameVariable2;
            FinalVariable3 = DefaultNameVariable3;
            FinalVariable4 = DefaultNameVariable4;
            
            // uv
            if (s_in2.Result == null)
            {
                Source = "_MainTex";
            }
            else
            {
                Source = s_in2.Result;
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

            s_out.StringPreviewLines = s_in.StringPreviewNew + s_in2.StringPreviewNew;
            if (parametersOK)
            {
                s_out.ValueLine = "float4 " + DefaultName + " = PageCurl(" + Source + "," + uv + "," + DefaultNameVariable1 + "," + DefaultNameVariable2 + "," + DefaultNameVariable3 + "," + DefaultNameVariable4 + ");\n";
            }
            else
            {
                s_out.ValueLine = "float4 " + DefaultName + " = PageCurl(" + Source + "," + uv + "," + Variable.ToString() + "," + Variable2.ToString() + "," + Variable3.ToString() + "," + Variable4.ToString() + ");\n";
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
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable1 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable2 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable3 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable4 + ";\n";
            }

            Outputs[0].SetValue<SuperFloat4>(s_out);

            count++;
            return true;
        }
    }
}