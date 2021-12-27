using UnityEngine;
using UnityEditor;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;
namespace _ShaderoShaderEditorFramework
{
[Node(false, "World Grass/World Grass Mask FX")]
public class WorldGrassMask : Node
{ 
        [HideInInspector]
        public const string ID = "WorldGrassMask";
        [HideInInspector]
        public override string GetID { get { return ID; } }
        [HideInInspector]
        public float Variable = 0.025f;
        [HideInInspector]
        public float Variable2 = 2f;
        [HideInInspector]
        public float Variable3 = 0.55f;
        [HideInInspector]
        public float Variable4 =1f;
        [HideInInspector]
        public float Variable5 = -0.5f;
        [HideInInspector]
        public float Variable6 = 3f;
        [HideInInspector]
        public bool DisplacementX = true;
        [HideInInspector]
        public bool DisplacementY = true;
        public static int count = 1;
        public static bool tag = false;
        public static string code;

        [HideInInspector]
    public bool AddParameters = true;

    public static void Init()
    { 
        tag = false;
        count = 1;
    }

    public void Function()
    {
            code = "";
            code += "float4 WorldGrassDistortionMask(float3 worldpos, float2 uv, sampler2D t, sampler2D o, sampler2D m, float zoom, float worldsize, float shadowintensity, float windspeed, float winddirection, float grassdirection)\n";
            code += "{\n";
            code += "float2 u = uv;\n";
            code += "float2 u2 = uv;\n";
            code += "float automove = _Time.y * grassdirection;\n";
            code += "worldpos *= worldsize;\n";
            code += "u.x = worldpos.r;\n";
            code += "u.x += automove*windspeed;\n";
            code += "u.y = worldpos.b;\n";
            code += "u.y += worldpos.g;\n";
            code += "u *= zoom;\n";
            code += "float4 nt = tex2D(t, u);\n";
            code += "float4 nt2 = tex2D(m, u2);\n";
            code += "float v = nt.r;\n";
            code += "v = sin(v * 2) / 2;\n";
            code += "uv.x += v*winddirection;\n";
            code += "uv.x = lerp(uv.x, u2.x, 1 - u2.y);\n";
            code += "uv = saturate(uv);\n";
            code += "uv = lerp(uv, u2, 1-nt2.r);\n";
            code += "float4 r = tex2D(o, uv);\n";
            code += "float shadow = lerp(v * 3, 0, u2.y);\n";
            code += "r.rgb -= shadow*shadowintensity;\n";
            code += "return r;\n";
            code += "}\n";

        }


        public override Node Create(Vector2 pos)
    {
        Function();

            WorldGrassMask node = ScriptableObject.CreateInstance<WorldGrassMask>();
             
        node.name = "Word Grass Mask FX";
        node.rect = new Rect(pos.x, pos.y, 172, 500);
        node.CreateInput("UV", "SuperFloat2");
        node.CreateInput("Source", "SuperSource");
        node.CreateInput("Source", "SuperSource");
        node.CreateInput("Source", "SuperSource");
        node.CreateOutput("RGBA", "SuperFloat4");

        return node;
    }

    protected internal override void NodeGUI()
    {
        Texture2D preview = ResourceManager.LoadTexture("Textures/previews/nid_grassmask.jpg");
        GUI.DrawTexture(new Rect(2, 0, 172, 46), preview);
        GUILayout.Space(50);
        GUILayout.BeginHorizontal();
        Inputs[0].DisplayLayout(new GUIContent("UV", "UV"));
            Outputs[0].DisplayLayout(new GUIContent("RGBA", "RGBA"));
            GUILayout.EndHorizontal();
        Inputs[2].DisplayLayout(new GUIContent("Source Main", "Source"));
        Inputs[1].DisplayLayout(new GUIContent("Source Texture Cloud", "Source"));
        Inputs[3].DisplayLayout(new GUIContent("Source Mask", "Source"));

            if (GUILayout.Button("Reset"))
        {
            Variable = 0.025f;
            Variable2 = 2f;
            Variable3 = 0.55f;
            Variable4 = 1f;
            Variable5 = -0.5f;
            Variable6 = -3f;
            }

            if (NodeEditor._Shadero_Material != null)
            {
                NodeEditor._Shadero_Material.SetFloat(FinalVariable, Variable);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable2, Variable2);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable3, Variable3);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable4, Variable4);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable5, Variable5);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable6, Variable6);
            }

            AddParameters = GUILayout.Toggle(AddParameters, "Add Parameters");

            GUILayout.Label("Zoom: (0.001/0.1) " + Variable.ToString("0.00"));
            Variable =HorizontalSlider(Variable, 0.001f, 0.1f);
            GUILayout.Label("Worldsize: (0.01/8) " + Variable2.ToString("0.00"));
            Variable2 = HorizontalSlider(Variable2, 0.01f, 8f);
            GUILayout.Label("Shadow: (0/2 " + Variable3.ToString("0.00"));
            Variable3 = HorizontalSlider(Variable3, -2f, 2f);
            GUILayout.Label("Wind Speed: (-8/8) " + Variable4.ToString("0.00"));
            Variable4 = HorizontalSlider(Variable4, -8f, 8f);
            GUILayout.Label("Grass Dir: (-2/2) " + Variable5.ToString("0.00"));
            Variable5 = HorizontalSlider(Variable5, -2f, 2f);
            GUILayout.Label("Wind Dir: (-8/8) " + Variable6.ToString("0.00"));
            Variable6 = HorizontalSlider(Variable6, -8f, 8f);


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
        Node.WorldPosTag = true;
        tag = true;

        SuperFloat2 s_in = Inputs[0].GetValue<SuperFloat2>();
        SuperSource s_in2 = Inputs[1].GetValue<SuperSource>();
        SuperSource s_in3 = Inputs[2].GetValue<SuperSource>();
            SuperSource s_in4 = Inputs[3].GetValue<SuperSource>();
            SuperFloat4 s_out = new SuperFloat4();

        string NodeCount = MemoCount.ToString();
        string DefaultName = "_WorldGrassUV_" + NodeCount;
        string DefaultNameVariable1 = "_WorldGrassUV_Zoom_" + NodeCount;
        string DefaultNameVariable2 = "_WorldGrassUV_Worldsize_" + NodeCount;
        string DefaultNameVariable3 = "_WorldGrassUV_Shadowintensity_" + NodeCount;
        string DefaultNameVariable4 = "_WorldGrassUV_WindSpeed_" + NodeCount;
        string DefaultNameVariable5 = "_WorldGrassUV_WindDirection_" + NodeCount;
        string DefaultNameVariable6 = "_WorldGrassUV_GrassDirection_" + NodeCount;
        string DefaultParameters1 = ", Range(0.001, 1)) = " + Variable.ToString();
        string DefaultParameters2 = ", Range(0.01, 8)) = " + Variable2.ToString();
        string DefaultParameters3 = ", Range(0, 2)) = " + Variable3.ToString();
        string DefaultParameters4 = ", Range(0, 8)) = " + Variable4.ToString();
        string DefaultParameters5 = ", Range(-4, 4)) = " + Variable5.ToString();
        string DefaultParameters6 = ", Range(-8, 8)) = " + Variable6.ToString();
        string uv = s_in.Result;
        string Source = s_in2.Result;
        string Source2 = s_in3.Result;
        string Source3 = s_in4.Result;

        FinalVariable = DefaultNameVariable1;
        FinalVariable2 = DefaultNameVariable2;
        FinalVariable3 = DefaultNameVariable3;
        FinalVariable4 = DefaultNameVariable4;
        FinalVariable5 = DefaultNameVariable5;
        FinalVariable6 = DefaultNameVariable6;



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

        s_out.StringPreviewLines = s_in.StringPreviewNew + s_in2.StringPreviewNew + s_in2.StringPreviewNew + s_in3.StringPreviewNew + s_in4.StringPreviewNew;

            if (AddParameters)
        {
                s_out.ValueLine = "float4 " + DefaultName + " = WorldGrassDistortionMask(i.worldPos," + uv + ", " +Source+ ", " + Source2 + ", " + Source3 + "," + DefaultNameVariable1 + ", " + DefaultNameVariable2 + "," + DefaultNameVariable3 + "," + DefaultNameVariable4 + "," + DefaultNameVariable5 + "," + DefaultNameVariable6 + ");\n";
         }
        else
        {
                s_out.ValueLine = "float4 " + DefaultName + " = WorldGrassDistortionMask(i.worldPos," + uv + ", " + Source + ", " + Source2 + ", " + Source3 + "," + Variable.ToString() + ", " + Variable2.ToString() + "," + Variable3.ToString() + "," + Variable4.ToString() + "," + Variable5.ToString() + "," + Variable6.ToString() + ");\n";
        
        }

        s_out.StringPreviewNew = s_out.StringPreviewLines + s_out.ValueLine;
        s_out.ParametersLines += s_in.ParametersLines + s_in2.ParametersLines + s_in2.ParametersLines + s_in3.ParametersLines + s_in4.ParametersLines;

            s_out.Result = DefaultName;
        s_out.ParametersDeclarationLines += s_in.ParametersDeclarationLines + s_in2.ParametersDeclarationLines + s_in2.ParametersDeclarationLines + s_in3.ParametersDeclarationLines + s_in4.ParametersDeclarationLines;

            if (AddParameters)
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
            s_out.ParametersDeclarationLines += "float " + DefaultNameVariable6 + ";\n";
            }
            Outputs[0].SetValue<SuperFloat4>(s_out);

        count++;
        return true;
    }
}
}