using UnityEngine;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;

namespace _ShaderoShaderEditorFramework
{
[Node(false, "UV/FX (UV)/Sliced Horizontal Bar UV")]

public class SlicedHorizontalBarUV : Node
{
    public const string ID = "SlicedHorizontalBarUV";
    public override string GetID { get { return ID; } }
    [HideInInspector] public float Variable = 0.15f;
    [HideInInspector] public float Variable2 = 2f;
    [HideInInspector]
    public bool AddParameters = true;

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
            code += "float2 SlicedHorizontalBarUV(float2 uv, float b1, float s)\n";
            code += "{\n";
            code += "float ov = uv.x;\n";
            code += "float muv =uv.x;\n";
            code += "muv *= s;\n";
            code += "float s1 = muv;\n";
            code += "float s2 = 1 + muv - s;\n";
            code += "float z = b1 / s;\n";
            code += "muv = lerp(b1, 1. - b1, ov);\n";
            code += "muv -= z;\n";
            code += "uv.x = muv / (1. - (z * 2.));\n";
            code += "if (ov < z) { uv.x = s1; }\n";
            code += "if (ov > 1. - z) { uv.x = s2; }\n";
            code += "return uv;\n";
            code += "}\n";
    }

        public override Node Create(Vector2 pos)
    {
        Function();
            SlicedHorizontalBarUV node = ScriptableObject.CreateInstance<SlicedHorizontalBarUV>();
        node.name = "Sliced Horizontal Bar UV";
        node.rect = new Rect(pos.x, pos.y, 172, 260);
        node.CreateInput("UV", "SuperFloat2");
        node.CreateOutput("UV", "SuperFloat2");
        return node;
    }

    protected internal override void NodeGUI()
    {
        Texture2D preview = ResourceManager.LoadTexture("Textures/previews/nid_pixel.jpg");
        GUI.DrawTexture(new Rect(2, 0, 172, 46), preview);
        GUILayout.Space(50);
        GUILayout.BeginHorizontal();
        Inputs[0].DisplayLayout(new GUIContent("UV", "Link with a UV"));
        Outputs[0].DisplayLayout(new GUIContent("UV", "The input UV"));
        GUILayout.EndHorizontal();

        if (GUILayout.Button("Reset"))
        {
            Variable = 0.25f;
            Variable2 = 2f;
     
        }

        AddParameters = GUILayout.Toggle(AddParameters, "Add Parameters");
    

        if (NodeEditor._Shadero_Material != null)
        {
            NodeEditor._Shadero_Material.SetFloat(FinalVariable1, Variable);
            NodeEditor._Shadero_Material.SetFloat(FinalVariable2, Variable2);
        }
        GUILayout.Label("Position: (0.001 to 0.5) " + Variable.ToString("0.00"));
        Variable =HorizontalSlider(Variable, 0.001f, 0.5f);

        GUILayout.Label("Strech Size: (0.2 to 8) " + Variable2.ToString("0.00"));
        Variable2 =HorizontalSlider(Variable2, 0.2f, 8f);

       
    }

    private string FinalVariable1;
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
        SuperFloat2 s_out = new SuperFloat2();

        string NodeCount = MemoCount.ToString();
        string DefaultName = "SlicedHorizontalBarUV_";
        string DefaultNameVariable1 = DefaultName + "Position_" + NodeCount;
        string DefaultNameVariable2 = DefaultName + "StretchSize_" + NodeCount;
        DefaultName = DefaultName + NodeCount;
        string DefaultParameters1 = ", Range(0.001, 0.5)) = " + Variable.ToString();
        string DefaultParameters2 = ", Range(0.2, 8)) = " + Variable2.ToString();
        string VoidName = "SlicedHorizontalBarUV";
        string PreviewVariable = s_in.Result;
        if (PreviewVariable == null) PreviewVariable = "i.texcoord";
   
        FinalVariable1 = DefaultNameVariable1;
        FinalVariable2 = DefaultNameVariable2;
    
        s_out.StringPreviewLines = s_in.StringPreviewNew;

         if (AddParameters)
        {
            s_out.ValueLine = "float2 " + DefaultName + " = " + VoidName + "(" + PreviewVariable
            + ","
            + DefaultNameVariable1 + ","
            + DefaultNameVariable2 + ");\n";
        }
        else
        {
            s_out.ValueLine = "float2 " + DefaultName + " = " + VoidName + "(" + PreviewVariable
                 + ","
                 + Variable.ToString() + ","
                 + Variable2.ToString() + ");\n";

        }
        s_out.StringPreviewNew = s_out.StringPreviewLines + s_out.ValueLine;
        s_out.Result = DefaultName;

        s_out.ParametersLines += s_in.ParametersLines;

        s_out.ParametersDeclarationLines += s_in.ParametersDeclarationLines;


        if (AddParameters)
        {
            s_out.ParametersLines += DefaultNameVariable1 + "(\"" + DefaultNameVariable1 + "\"" + DefaultParameters1 + "\n";
            s_out.ParametersLines += DefaultNameVariable2 + "(\"" + DefaultNameVariable2 + "\"" + DefaultParameters2 + "\n";

            s_out.ParametersDeclarationLines += "float " + DefaultNameVariable1 + ";\n";
            s_out.ParametersDeclarationLines += "float " + DefaultNameVariable2 + ";\n";
        }

        Outputs[0].SetValue<SuperFloat2>(s_out);

        count++;

        return true;
    }
}
}