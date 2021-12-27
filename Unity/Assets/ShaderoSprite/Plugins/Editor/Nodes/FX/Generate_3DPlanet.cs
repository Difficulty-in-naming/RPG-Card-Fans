using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections;
using _ShaderoShaderEditorFramework;
using _ShaderoShaderEditorFramework.Utilities;
namespace _ShaderoShaderEditorFramework
{
    [Node(false, "RGBA/Generate/3D/Procedural Planet")]
    public class Generate_3DPlanet : Node
    {
        [HideInInspector]
        public const string ID = "Generate_3DPlanet";
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
        public float Variable5 = -1.0f;
        [HideInInspector]
        public Color Variable6 = new Color(1, 1, 1, 0.2f);

        [HideInInspector]
        public float Variable7 = 1.0f;  // Speed 2
        [HideInInspector]
        public float Variable8 = 0.1f;  // Halo Intensity
        [HideInInspector]
        public float Variable9 = 0.0f;  // Halo Size
        [HideInInspector]
        public Color Variable10 = new Color(1, 1, 1, 0.25f);  // Halo Color
        [HideInInspector]
        public float Variable11 = 0.0f;  // Inside Shadow
        [HideInInspector]
        public float Variable12 = 0.0f;  // Dist X
        [HideInInspector]
        public float Variable13 = 0.0f;  // Dist Y
        [HideInInspector]
        public float Variable14 = 0.1f;  // Color Grad
        [HideInInspector]
        public float Variable15 = 1.0f;  // Color Grad Intensity
        [HideInInspector]
        public float Variable16 = 1.0f;  // Color Turn
        [HideInInspector]
        public Color Variable17 = new Color(1.0f, 0.5f, 0.0f, 0.2f);  // Halo Color

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
            code += "float4 Generate_3DPlanet(sampler2D txt, float2 uvx, float2 uv, float2 speed, float3 lightDir, float4 lightColor, float speed2, float halointensity, float halosize, float4 halocolor, float InsideShadow, float Distx, float Disty, float ColorGrad, float ColorGradIntensity, float ColorTurn, float4 ColorAmbiant)\n";
            code += "{\n";
            code += "speed *= _Time * speed2;\n";
            code += "float3 pos = float3(uv - float2(0.5, 0.5), 0);\n";
            code += "float3 pos2 = float3(uvx-float2(0.5,0.5), 0);\n";
            code += "float z_Square =0.15 - dot(pos2.xy, pos2.xy);\n";
            code += "float zs = z_Square+0.1;\n";
            code += "zs = max(zs+ halosize-0.05, 0)*12;\n";
            code += "if (z_Square <= .0) return float4(halocolor.r, halocolor.g, halocolor.b, zs*halointensity*4*halocolor.a);\n";
            code += "zs=saturate(zs);\n";
            code += "pos.z = sqrt(z_Square);\n";
            code += "float3 normalDir = normalize(pos);\n";
            code += "pos = mul(pos, float3x3(cos(speed.y), sin(speed.y) * sin(speed.x), sin(speed.y) * cos(speed.x), 0,\n";
            code += "cos(speed.x), -sin(speed.x), -sin(speed.y), cos(speed.y) * sin(speed.x), cos(speed.y) * cos(speed.x)));\n";
            code += "float lon = atan(pos.x / pos.z);\n";
            code += "lon -= 3.1415926 * step(pos.z, .0);\n";
            code += "float lat = acos(pos.y/0.4);\n";
            code += "float2 uv2 = float2(lon, lat) / float2(3.1415926, -3.1415926);\n";
            code += "float2 uv3 = uv2;\n";
            code += "uv3.x = sin(uv3.x*3.1416)*ColorTurn;\n";
            code += "float2 px = uv3 * float2(2.025, 20.025) + float2(0, 0.12);\n";
            code += "float p_x = px.x;\n";
            code += "float p_y = px.y;\n";
            code += "float a_x = Distx;\n";
            code += "float a_y = Disty;\n";
            code += "for (int i = 1; i<8; i++) {\n";
            code += "float float_i = float(i);\n";
            code += "px.x += Distx*sin(float_i*px.y + _Time * speed2*16.0);\n";
            code += "px.y += Disty*cos(float_i*px.x); }\n";
            code += "px.x = lerp(uv3.x, px.x, ColorGrad);\n";
            code += "px.y = lerp(uv3.y, px.y, ColorGrad);\n";
            code += "float r = sin(px.y)*.5 + .4;\n";
            code += "float g = cos(px.y)*.5 + .7;\n";
            code += "float b = cos(px.y)*.5 + .8;\n";
            code += "r = cos(px.x + px.y + 1.3)*.5 + .5+ ColorAmbiant.r;\n";
            code += "g = sin(px.x + px.y + 2.)*.5 + .5+ ColorAmbiant.g;\n";
            code += "b = (sin(px.x + px.y + 1.) + cos(px.x + px.y + 1.))*.25 + .5+ ColorAmbiant.b;\n";
            code += "float2 change = lerp(float2(0, 0), float2(r, g), ColorGrad);\n";
            code += "float4 emission = tex2D(txt, uv2+ change);\n";
            code += "emission.rgb -= z_Square * 32* InsideShadow;\n";
            code += "emission.rgb = lerp(emission.rgb, dot(emission.rgb, 0.3)*ColorAmbiant.rgb, ColorAmbiant.a);\n";
            code += "float3 diffuse = (lightColor*lightColor.a) * max(0.0, dot(normalDir, lightDir));\n";
            code += "float3 specular = lightColor * pow(max(0.0, dot(normalize(pos + lightDir), normalDir)), 3.0);\n";
            code += "float3 cloud = saturate(float3(r, g, b));\n";
            code += "emission.rgb = lerp(emission.rgb, cloud, dot(cloud,0.3)*ColorGradIntensity);\n";
            code += "float3 color = emission.rgb + diffuse + specular;\n";
            code += "color = max(color, 0);\n";
            code += "return float4(color, emission.a);\n";
            code += "}\n";

        }


        public override Node Create(Vector2 pos)
        {
            Function();

            Generate_3DPlanet node = ScriptableObject.CreateInstance<Generate_3DPlanet>();

            node.name = "Generate 3D Planet";
            node.rect = new Rect(pos.x, pos.y, 360, 760);

            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("UV", "SuperFloat2");
            node.CreateInput("Source", "SuperSource");
            node.CreateOutput("RGBA", "SuperFloat4");

            return node;
        }

        protected internal override void NodeGUI()
        {


            Texture2D preview = ResourceManager.LoadTexture("Textures/previews/nid-generate3dplanet.jpg");
            GUI.DrawTexture(new Rect(2, 0, 360, 46), preview);
            GUILayout.Space(50);

            GUILayout.BeginHorizontal();
            Inputs[0].DisplayLayout(new GUIContent("UV Sphere", "UV"));
            Outputs[0].DisplayLayout(new GUIContent("RGBA", "RGBA"));
            GUILayout.EndHorizontal();

            Inputs[1].DisplayLayout(new GUIContent("UV Texture", "UV"));
            Inputs[2].DisplayLayout(new GUIContent("Source", "Source"));

          
            GUILayout.BeginHorizontal();
            if (GUILayout.Button("Jupiter"))
            {
                Variable2 =-0.05f;
                Variable  = 0.00f;
                Variable3 = 1.0f;
                Variable4 = 1.0f;
                Variable5 = -1.0f;
                Variable6 = new Color(1, 1, 1, 0.2f);
                Variable7 = 0.8f;
                Variable8 = 0.65f;
                Variable9 = -0.03f;
                Variable10 = new Color(1, 0.5f, 0, 0.55f);
                Variable11 = -0.2f;
                Variable12 = -0.4f;
                Variable13 = 0.2f;
                Variable14 = 1.1f;
                Variable15 = 0.75f;
                Variable16 = 0.42f;
                Variable17 = new Color(1, 0.4f, 0, 0.7f);
            }
            if (GUILayout.Button("Neptune"))
            {
                Variable2 = 0.2f;
                Variable = 0.0f;
                Variable3 = 1.0f;
                Variable4 = 1.0f;
                Variable5 = -1.0f;
                Variable6 = new Color(0.2f, 0.6f, 0.2f, 0.2f);
                Variable7 = 1.0f;
                Variable8 = 0.9f;
                Variable9 = 0.02f;
                Variable10 = new Color(0.2f, 0.2f, 0.6f, 0.55f);
                Variable11 = -0.20f;
                Variable12 = -0.03f;
                Variable13 = 0.3f;
                Variable14 = 1.1f;
                Variable15 = -0.629f;
                Variable16 = -0.054f;
                Variable17 = new Color(0, 0.5f, 1, 1f);
            }
            if (GUILayout.Button("Random"))
            {
                Variable2 = Random.Range(-0.2f, 0.2f);
                Variable = Random.Range(-0.2f, 0.2f);
                Variable3 = Random.Range(-4.0f, 4.0f);
                Variable4 = Random.Range(-4.0f, 4.0f);
                Variable5 = Random.Range(-4.0f, 4.0f);
                Variable6 = new Color(Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f), Random.Range(0.0f, 0.25f));
                Variable7 = Random.Range(-0.6f, 0.6f);
                Variable8 = Random.Range(0.0f, 1.00f);
                Variable9 = Random.Range(-0.05f, 0.05f);
                Variable10 = new Color(Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f));
                Variable11 = Random.Range(-0.2f, 0.3f);
                Variable12 = Random.Range(-0.5f, 0.5f);
                Variable13 = Random.Range(-0.5f, 0.5f);
                Variable14 = Random.Range(-0.1f, 1.1f); 
                Variable15 = Random.Range(-1.0f, 0.9f);
                Variable16 = Random.Range(-1.0f, 2.0f);
                Variable17 = new Color(Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f), Random.Range(0.0f, 1.0f));
            }

            GUILayout.EndHorizontal();


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
                NodeEditor._Shadero_Material.SetFloat(FinalVariable7, Variable7);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable8, Variable8);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable9, Variable9);
                NodeEditor._Shadero_Material.SetColor(FinalVariable10, Variable10);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable11, Variable11);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable12, Variable12);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable13, Variable13);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable14, Variable14);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable15, Variable15);
                NodeEditor._Shadero_Material.SetFloat(FinalVariable16, Variable16);
                NodeEditor._Shadero_Material.SetColor(FinalVariable17, Variable17);

            }
            GUILayout.BeginHorizontal();
            GUILayout.Label("Rot X : (-4 to 4)"); Variable2 = HorizontalSlider(Variable2, -4, 4);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Rot Y : (-4 to 4)"); Variable = HorizontalSlider(Variable, -4, 4);
            GUILayout.EndHorizontal();

            GUILayout.Space(8);
            GUILayout.Label("Light Direction");
            GUILayout.Space(8);
            GUILayout.BeginHorizontal();
            GUILayout.Label("X : (-4 to 4)"); Variable3 = HorizontalSlider(Variable3, -4, 4);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Y : (-4 to 4)"); Variable4 = HorizontalSlider(Variable4, -4, 4);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Z : (-4 to 4)"); Variable5 = HorizontalSlider(Variable5, -4, 4);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Light Color:"); Variable6 = EditorGUILayout.ColorField("", Variable6);
            GUILayout.EndHorizontal();

            GUILayout.Space(8);
            GUILayout.BeginHorizontal();
            GUILayout.Label("Speed : (-8 to 8)"); Variable7 = HorizontalSlider(Variable7, -8, 8);
            GUILayout.EndHorizontal();

            GUILayout.Space(8);
            GUILayout.Label("Halo");
            GUILayout.Space(8);
            GUILayout.BeginHorizontal();
            GUILayout.Label("Light : (0 to 1)"); Variable8 = HorizontalSlider(Variable8, 0, 1);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Size : (-0.05 to 0.05)"); Variable9 = HorizontalSlider(Variable9, -0.05f, 0.05f);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Color :"); Variable10 = EditorGUILayout.ColorField("", Variable10);
            GUILayout.EndHorizontal();

            GUILayout.Space(8);

            GUILayout.BeginHorizontal();
            GUILayout.Label("Shadow : (-1 to 1)"); Variable11 = HorizontalSlider(Variable11, -1, 1);
            GUILayout.EndHorizontal();

            GUILayout.Space(8);
            GUILayout.Label("Strange Planet");
            GUILayout.Space(8);
            GUILayout.BeginHorizontal();
            GUILayout.Label("Strange X : (-2 to 2)"); Variable12 = HorizontalSlider(Variable12, -2, 2);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Strange Y : (-2 to 2)"); Variable13 = HorizontalSlider(Variable13, -2, 2);
            GUILayout.EndHorizontal();

            GUILayout.Space(8);
            GUILayout.Label("Strange Cloud");
            GUILayout.Space(8);
            GUILayout.BeginHorizontal();
            GUILayout.Label("Grad : (-0.1 to 1.1)"); Variable14 = HorizontalSlider(Variable14, -0.1f,1.1f);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Intensity : (-2 to 2)"); Variable15 = HorizontalSlider(Variable15, -2, 2);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Turn : (-2 to 8)"); Variable16 = HorizontalSlider(Variable16, -2, 8);
            GUILayout.EndHorizontal();

            GUILayout.BeginHorizontal();
            GUILayout.Label("Color :"); Variable17 = EditorGUILayout.ColorField("", Variable17);
            GUILayout.EndHorizontal();

        }
        private string FinalVariable;
        private string FinalVariable2;
        private string FinalVariable3;
        private string FinalVariable4;
        private string FinalVariable5;
        private string FinalVariable6;
        private string FinalVariable7;
        private string FinalVariable8;
        private string FinalVariable9;
        private string FinalVariable10;
        private string FinalVariable11;
        private string FinalVariable12;
        private string FinalVariable13;
        private string FinalVariable14;
        private string FinalVariable15;
        private string FinalVariable16;
        private string FinalVariable17;
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
            string DefaultName = "_Generate_3DPlanet_" + NodeCount;
            string DefaultNameVariable1 = "_Generate_3DPlanet_RotationY_" + NodeCount;
            string DefaultNameVariable2 = "_Generate_3DPlanet_RotationX_" + NodeCount;
            string DefaultNameVariable3 = "_Generate_3DPlanet_LightDirection_X_" + NodeCount;
            string DefaultNameVariable4 = "_Generate_3DPlanet_LightDirection_Y_" + NodeCount;
            string DefaultNameVariable5 = "_Generate_3DPlanet_LightDirection_Z_" + NodeCount;
            string DefaultNameVariable6 = "_Generate_3DPlanet_Light_Color_" + NodeCount;
            string DefaultNameVariable7 = "_Generate_3DPlanet_Speed_" + NodeCount;
            string DefaultNameVariable8 = "_Generate_3DPlanet_HaloIntensity_" + NodeCount;
            string DefaultNameVariable9 = "_Generate_3DPlanet_HaloSize_" + NodeCount;
            string DefaultNameVariable10 = "_Generate_3DPlanet_HaloColor_" + NodeCount;
            string DefaultNameVariable11 = "_Generate_3DPlanet_InsideShadow_" + NodeCount;
            string DefaultNameVariable12 = "_Generate_3DPlanet_StrangeX_" + NodeCount;
            string DefaultNameVariable13 = "_Generate_3DPlanet_StrangeY_" + NodeCount;
            string DefaultNameVariable14 = "_Generate_3DPlanet_CloudVolume_" + NodeCount;
            string DefaultNameVariable15 = "_Generate_3DPlanet_CloudIntensity_" + NodeCount;
            string DefaultNameVariable16 = "_Generate_3DPlanet_CloudDistortion_" + NodeCount;
            string DefaultNameVariable17 = "_Generate_3DPlanet_CloudColor_" + NodeCount;
            string DefaultParameters1 = ", Range(-4, 4)) = " + Variable.ToString();
            string DefaultParameters2 = ", Range(-4, 4)) = " + Variable2.ToString();
            string DefaultParameters3 = ", Range(-4, 4)) = " + Variable3.ToString();
            string DefaultParameters4 = ", Range(-4, 4)) = " + Variable4.ToString();
            string DefaultParameters5 = ", Range(-4, 4)) = " + Variable5.ToString();
            string DefaultParameters6 = ", COLOR) = (" + Variable6.r + "," + Variable6.g + "," + Variable6.b + "," + Variable6.a + ")";
            string DefaultParameters7 = ", Range(-8, 8)) = " + Variable7.ToString();
            string DefaultParameters8 = ", Range(0, 1)) = " + Variable8.ToString();
            string DefaultParameters9 = ", Range(-0.05, 0.05)) = " + Variable9.ToString();
            string DefaultParameters10 = ", COLOR) = (" + Variable10.r + "," + Variable10.g + "," + Variable10.b + "," + Variable10.a + ")";
            string DefaultParameters11 = ", Range(-1, 1)) = " + Variable11.ToString();
            string DefaultParameters12 = ", Range(-2, 2)) = " + Variable12.ToString();
            string DefaultParameters13 = ", Range(-2, 2)) = " + Variable13.ToString();
            string DefaultParameters14 = ", Range(-0.1, 1.1)) = " + Variable14.ToString();
            string DefaultParameters15 = ", Range(-2, 2)) = " + Variable15.ToString();
            string DefaultParameters16 = ", Range(-2, 8)) = " + Variable16.ToString();
            string DefaultParameters17 = ", COLOR) = (" + Variable17.r + "," + Variable17.g + "," + Variable17.b + "," + Variable17.a + ")";
            string uv = s_in.Result;
            string uv2 = s_in2.Result;
            string Source = "";

            FinalVariable = DefaultNameVariable1;
            FinalVariable2 = DefaultNameVariable2;
            FinalVariable3 = DefaultNameVariable3;
            FinalVariable4 = DefaultNameVariable4;
            FinalVariable5 = DefaultNameVariable5;
            FinalVariable6 = DefaultNameVariable6;
            FinalVariable7 = DefaultNameVariable7;
            FinalVariable8 = DefaultNameVariable8;
            FinalVariable9 = DefaultNameVariable9;
            FinalVariable10 = DefaultNameVariable10;
            FinalVariable11 = DefaultNameVariable11;
            FinalVariable12 = DefaultNameVariable12;
            FinalVariable13 = DefaultNameVariable13;
            FinalVariable14 = DefaultNameVariable14;
            FinalVariable15 = DefaultNameVariable15;
            FinalVariable16 = DefaultNameVariable16;
            FinalVariable17 = DefaultNameVariable17;

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
                s_out.ValueLine = "float4 " + DefaultName + " = Generate_3DPlanet(" + Source + "," + uv + "," + uv2 + ", float2(" + DefaultNameVariable1 + "," + DefaultNameVariable2 + "),float3(" + DefaultNameVariable3 + "," + DefaultNameVariable4 + "," + DefaultNameVariable5 + ")," 
                + DefaultNameVariable6 + ","
                + DefaultNameVariable7 + ","
                + DefaultNameVariable8 + ","
                + DefaultNameVariable9 + ","
                + DefaultNameVariable10 + ","
                + DefaultNameVariable11 + ","
                + DefaultNameVariable12 + ","
                + DefaultNameVariable13 + ","
                + DefaultNameVariable14 + ","
                + DefaultNameVariable15 + ","
                + DefaultNameVariable16 + ","
                + DefaultNameVariable17 + ""
                + ");\n";
            }
            else
            {
                string vcol = "float4(" + Variable6.r.ToString() + "," + Variable6.g.ToString() + "," + Variable6.b.ToString() + "," + Variable6.a.ToString() + ")";
                string vcol2 = "float4(" + Variable10.r.ToString() + "," + Variable10.g.ToString() + "," + Variable10.b.ToString() + "," + Variable10.a.ToString() + ")";
                string vcol3 = "float4(" + Variable17.r.ToString() + "," + Variable17.g.ToString() + "," + Variable17.b.ToString() + "," + Variable17.a.ToString() + ")";

                s_out.ValueLine = "float4 " + DefaultName + " = Generate_3DPlanet(" + Source + "," + uv + "," + uv2 + ", float2(" + Variable.ToString() + "," + Variable2.ToString() + "),float3(" + Variable3.ToString() + "," + Variable4.ToString() + "," + Variable5.ToString() + ")," 
                 + vcol + ","
                 + Variable7.ToString() + ","
                 + Variable8.ToString() + ","
                 + Variable9.ToString() + ","
                 + vcol2 + ","
                 + Variable11.ToString() + ","
                 + Variable12.ToString() + ","
                 + Variable13.ToString() + ","
                 + Variable14.ToString() + ","
                 + Variable15.ToString() + ","
                 + Variable16.ToString() + ","
                 + vcol3 + ""
                 + ");\n";
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
                s_out.ParametersLines += DefaultNameVariable7 + "(\"" + DefaultNameVariable7 + "\"" + DefaultParameters7 + "\n";
                s_out.ParametersLines += DefaultNameVariable8 + "(\"" + DefaultNameVariable8 + "\"" + DefaultParameters8 + "\n";
                s_out.ParametersLines += DefaultNameVariable9 + "(\"" + DefaultNameVariable9 + "\"" + DefaultParameters9 + "\n";
                s_out.ParametersLines += DefaultNameVariable10 + "(\"" + DefaultNameVariable10 + "\"" + DefaultParameters10 + "\n";
                s_out.ParametersLines += DefaultNameVariable11 + "(\"" + DefaultNameVariable11 + "\"" + DefaultParameters11 + "\n";
                s_out.ParametersLines += DefaultNameVariable12 + "(\"" + DefaultNameVariable12 + "\"" + DefaultParameters12 + "\n";
                s_out.ParametersLines += DefaultNameVariable13 + "(\"" + DefaultNameVariable13 + "\"" + DefaultParameters13 + "\n";
                s_out.ParametersLines += DefaultNameVariable14 + "(\"" + DefaultNameVariable14 + "\"" + DefaultParameters14 + "\n";
                s_out.ParametersLines += DefaultNameVariable15 + "(\"" + DefaultNameVariable15 + "\"" + DefaultParameters15 + "\n";
                s_out.ParametersLines += DefaultNameVariable16 + "(\"" + DefaultNameVariable16 + "\"" + DefaultParameters16 + "\n";
                s_out.ParametersLines += DefaultNameVariable17 + "(\"" + DefaultNameVariable17 + "\"" + DefaultParameters17 + "\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable1 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable2 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable3 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable4 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable5 + ";\n";
                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable6 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable7 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable8 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable9 + ";\n";
                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable10 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable11 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable12 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable13 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable14 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable15 + ";\n";
                s_out.ParametersDeclarationLines += "float " + DefaultNameVariable16 + ";\n";
                s_out.ParametersDeclarationLines += "float4 " + DefaultNameVariable17 + ";\n";
            }

            Outputs[0].SetValue<SuperFloat4>(s_out);

            count++;
            return true;
        }
    }
}