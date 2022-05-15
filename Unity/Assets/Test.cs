﻿using UnityEngine;

namespace DefaultNamespace
{

    public class Test : MonoBehaviour
    {
        
        	public static int GL_ES_VERSION_2_0 = 1;
	public static int GL_DEPTH_BUFFER_BIT = 256;
	public static int GL_STENCIL_BUFFER_BIT = 1024;
	public static int GL_COLOR_BUFFER_BIT = 16384;
	public static int GL_FALSE = 0;
	public static int GL_TRUE = 1;
	public static int GL_POINTS = 0;
	public static int GL_LINES = 1;
	public static int GL_LINE_LOOP = 2;
	public static int GL_LINE_STRIP = 3;
	public static int GL_TRIANGLES = 4;
	public static int GL_TRIANGLE_STRIP = 5;
	public static int GL_TRIANGLE_FAN = 6;
	public static int GL_ZERO = 0;
	public static int GL_ONE = 1;
	public static int GL_SRC_COLOR = 768;
	public static int GL_ONE_MINUS_SRC_COLOR = 769;
	public static int GL_SRC_ALPHA = 770;
	public static int GL_ONE_MINUS_SRC_ALPHA = 771;
	public static int GL_DST_ALPHA = 772;
	public static int GL_ONE_MINUS_DST_ALPHA = 773;
	public static int GL_DST_COLOR = 774;
	public static int GL_ONE_MINUS_DST_COLOR = 775;
	public static int GL_SRC_ALPHA_SATURATE = 776;
	public static int GL_FUNC_ADD = 32774;
	public static int GL_BLEND_EQUATION = 32777;
	public static int GL_BLEND_EQUATION_RGB = 32777;
	public static int GL_BLEND_EQUATION_ALPHA = 34877;
	public static int GL_FUNC_SUBTRACT = 32778;
	public static int GL_FUNC_REVERSE_SUBTRACT = 32779;
	public static int GL_BLEND_DST_RGB = 32968;
	public static int GL_BLEND_SRC_RGB = 32969;
	public static int GL_BLEND_DST_ALPHA = 32970;
	public static int GL_BLEND_SRC_ALPHA = 32971;
	public static int GL_CONSTANT_COLOR = 32769;
	public static int GL_ONE_MINUS_CONSTANT_COLOR = 32770;
	public static int GL_CONSTANT_ALPHA = 32771;
	public static int GL_ONE_MINUS_CONSTANT_ALPHA = 32772;
	public static int GL_BLEND_COLOR = 32773;
	public static int GL_ARRAY_BUFFER = 34962;
	public static int GL_ELEMENT_ARRAY_BUFFER = 34963;
	public static int GL_ARRAY_BUFFER_BINDING = 34964;
	public static int GL_ELEMENT_ARRAY_BUFFER_BINDING = 34965;
	public static int GL_STREAM_DRAW = 35040;
	public static int GL_STATIC_DRAW = 35044;
	public static int GL_DYNAMIC_DRAW = 35048;
	public static int GL_BUFFER_SIZE = 34660;
	public static int GL_BUFFER_USAGE = 34661;
	public static int GL_CURRENT_VERTEX_ATTRIB = 34342;
	public static int GL_FRONT = 1028;
	public static int GL_BACK = 1029;
	public static int GL_FRONT_AND_BACK = 1032;
	public static int GL_TEXTURE_2D = 3553;
	public static int GL_CULL_FACE = 2884;
	public static int GL_BLEND = 3042;
	public static int GL_DITHER = 3024;
	public static int GL_STENCIL_TEST = 2960;
	public static int GL_DEPTH_TEST = 2929;
	public static int GL_SCISSOR_TEST = 3089;
	public static int GL_POLYGON_OFFSET_FILL = 32823;
	public static int GL_SAMPLE_ALPHA_TO_COVERAGE = 32926;
	public static int GL_SAMPLE_COVERAGE = 32928;
	public static int GL_NO_ERROR = 0;
	public static int GL_INVALID_ENUM = 1280;
	public static int GL_INVALID_VALUE = 1281;
	public static int GL_INVALID_OPERATION = 1282;
	public static int GL_OUT_OF_MEMORY = 1285;
	public static int GL_CW = 2304;
	public static int GL_CCW = 2305;
	public static int GL_LINE_WIDTH = 2849;
	public static int GL_ALIASED_POINT_SIZE_RANGE = 33901;
	public static int GL_ALIASED_LINE_WIDTH_RANGE = 33902;
	public static int GL_CULL_FACE_MODE = 2885;
	public static int GL_FRONT_FACE = 2886;
	public static int GL_DEPTH_RANGE = 2928;
	public static int GL_DEPTH_WRITEMASK = 2930;
	public static int GL_DEPTH_CLEAR_VALUE = 2931;
	public static int GL_DEPTH_FUNC = 2932;
	public static int GL_STENCIL_CLEAR_VALUE = 2961;
	public static int GL_STENCIL_FUNC = 2962;
	public static int GL_STENCIL_FAIL = 2964;
	public static int GL_STENCIL_PASS_DEPTH_FAIL = 2965;
	public static int GL_STENCIL_PASS_DEPTH_PASS = 2966;
	public static int GL_STENCIL_REF = 2967;
	public static int GL_STENCIL_VALUE_MASK = 2963;
	public static int GL_STENCIL_WRITEMASK = 2968;
	public static int GL_STENCIL_BACK_FUNC = 34816;
	public static int GL_STENCIL_BACK_FAIL = 34817;
	public static int GL_STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
	public static int GL_STENCIL_BACK_PASS_DEPTH_PASS = 34819;
	public static int GL_STENCIL_BACK_REF = 36003;
	public static int GL_STENCIL_BACK_VALUE_MASK = 36004;
	public static int GL_STENCIL_BACK_WRITEMASK = 36005;
	public static int GL_VIEWPORT = 2978;
	public static int GL_SCISSOR_BOX = 3088;
	public static int GL_COLOR_CLEAR_VALUE = 3106;
	public static int GL_COLOR_WRITEMASK = 3107;
	public static int GL_UNPACK_ALIGNMENT = 3317;
	public static int GL_PACK_ALIGNMENT = 3333;
	public static int GL_MAX_TEXTURE_SIZE = 3379;
	public static int GL_MAX_TEXTURE_UNITS = 34018;
	public static int GL_MAX_VIEWPORT_DIMS = 3386;
	public static int GL_SUBPIXEL_BITS = 3408;
	public static int GL_RED_BITS = 3410;
	public static int GL_GREEN_BITS = 3411;
	public static int GL_BLUE_BITS = 3412;
	public static int GL_ALPHA_BITS = 3413;
	public static int GL_DEPTH_BITS = 3414;
	public static int GL_STENCIL_BITS = 3415;
	public static int GL_POLYGON_OFFSET_UNITS = 10752;
	public static int GL_POLYGON_OFFSET_FACTOR = 32824;
	public static int GL_TEXTURE_BINDING_2D = 32873;
	public static int GL_SAMPLE_BUFFERS = 32936;
	public static int GL_SAMPLES = 32937;
	public static int GL_SAMPLE_COVERAGE_VALUE = 32938;
	public static int GL_SAMPLE_COVERAGE_INVERT = 32939;
	public static int GL_NUM_COMPRESSED_TEXTURE_FORMATS = 34466;
	public static int GL_COMPRESSED_TEXTURE_FORMATS = 34467;
	public static int GL_DONT_CARE = 4352;
	public static int GL_FASTEST = 4353;
	public static int GL_NICEST = 4354;
	public static int GL_GENERATE_MIPMAP = 33169;
	public static int GL_GENERATE_MIPMAP_HINT = 33170;
	public static int GL_BYTE = 5120;
	public static int GL_UNSIGNED_BYTE = 5121;
	public static int GL_SHORT = 5122;
	public static int GL_UNSIGNED_SHORT = 5123;
	public static int GL_INT = 5124;
	public static int GL_UNSIGNED_INT = 5125;
	public static int GL_FLOAT = 5126;
	public static int GL_FIXED = 5132;
	public static int GL_DEPTH_COMPONENT = 6402;
	public static int GL_ALPHA = 6406;
	public static int GL_RGB = 6407;
	public static int GL_RGBA = 6408;
	public static int GL_LUMINANCE = 6409;
	public static int GL_LUMINANCE_ALPHA = 6410;
	public static int GL_UNSIGNED_SHORT_4_4_4_4 = 32819;
	public static int GL_UNSIGNED_SHORT_5_5_5_1 = 32820;
	public static int GL_UNSIGNED_SHORT_5_6_5 = 33635;
	public static int GL_FRAGMENT_SHADER = 35632;
	public static int GL_VERTEX_SHADER = 35633;
	public static int GL_MAX_VERTEX_ATTRIBS = 34921;
	public static int GL_MAX_VERTEX_UNIFORM_VECTORS = 36347;
	public static int GL_MAX_VARYING_VECTORS = 36348;
	public static int GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
	public static int GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
	public static int GL_MAX_TEXTURE_IMAGE_UNITS = 34930;
	public static int GL_MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
	public static int GL_SHADER_TYPE = 35663;
	public static int GL_DELETE_STATUS = 35712;
	public static int GL_LINK_STATUS = 35714;
	public static int GL_VALIDATE_STATUS = 35715;
	public static int GL_ATTACHED_SHADERS = 35717;
	public static int GL_ACTIVE_UNIFORMS = 35718;
	public static int GL_ACTIVE_UNIFORM_MAX_LENGTH = 35719;
	public static int GL_ACTIVE_ATTRIBUTES = 35721;
	public static int GL_ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722;
	public static int GL_SHADING_LANGUAGE_VERSION = 35724;
	public static int GL_CURRENT_PROGRAM = 35725;
	public static int GL_NEVER = 512;
	public static int GL_LESS = 513;
	public static int GL_EQUAL = 514;
	public static int GL_LEQUAL = 515;
	public static int GL_GREATER = 516;
	public static int GL_NOTEQUAL = 517;
	public static int GL_GEQUAL = 518;
	public static int GL_ALWAYS = 519;
	public static int GL_KEEP = 7680;
	public static int GL_REPLACE = 7681;
	public static int GL_INCR = 7682;
	public static int GL_DECR = 7683;
	public static int GL_INVERT = 5386;
	public static int GL_INCR_WRAP = 34055;
	public static int GL_DECR_WRAP = 34056;
	public static int GL_VENDOR = 7936;
	public static int GL_RENDERER = 7937;
	public static int GL_VERSION = 7938;
	public static int GL_EXTENSIONS = 7939;
	public static int GL_NEAREST = 9728;
	public static int GL_LINEAR = 9729;
	public static int GL_NEAREST_MIPMAP_NEAREST = 9984;
	public static int GL_LINEAR_MIPMAP_NEAREST = 9985;
	public static int GL_NEAREST_MIPMAP_LINEAR = 9986;
	public static int GL_LINEAR_MIPMAP_LINEAR = 9987;
	public static int GL_TEXTURE_MAG_FILTER = 10240;
	public static int GL_TEXTURE_MIN_FILTER = 10241;
	public static int GL_TEXTURE_WRAP_S = 10242;
	public static int GL_TEXTURE_WRAP_T = 10243;
	public static int GL_TEXTURE = 5890;
	public static int GL_TEXTURE_CUBE_MAP = 34067;
	public static int GL_TEXTURE_BINDING_CUBE_MAP = 34068;
	public static int GL_TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
	public static int GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
	public static int GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
	public static int GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
	public static int GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
	public static int GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
	public static int GL_MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
	public static int GL_TEXTURE0 = 33984;
	public static int GL_TEXTURE1 = 33985;
	public static int GL_TEXTURE2 = 33986;
	public static int GL_TEXTURE3 = 33987;
	public static int GL_TEXTURE4 = 33988;
	public static int GL_TEXTURE5 = 33989;
	public static int GL_TEXTURE6 = 33990;
	public static int GL_TEXTURE7 = 33991;
	public static int GL_TEXTURE8 = 33992;
	public static int GL_TEXTURE9 = 33993;
	public static int GL_TEXTURE10 = 33994;
	public static int GL_TEXTURE11 = 33995;
	public static int GL_TEXTURE12 = 33996;
	public static int GL_TEXTURE13 = 33997;
	public static int GL_TEXTURE14 = 33998;
	public static int GL_TEXTURE15 = 33999;
	public static int GL_TEXTURE16 = 34000;
	public static int GL_TEXTURE17 = 34001;
	public static int GL_TEXTURE18 = 34002;
	public static int GL_TEXTURE19 = 34003;
	public static int GL_TEXTURE20 = 34004;
	public static int GL_TEXTURE21 = 34005;
	public static int GL_TEXTURE22 = 34006;
	public static int GL_TEXTURE23 = 34007;
	public static int GL_TEXTURE24 = 34008;
	public static int GL_TEXTURE25 = 34009;
	public static int GL_TEXTURE26 = 34010;
	public static int GL_TEXTURE27 = 34011;
	public static int GL_TEXTURE28 = 34012;
	public static int GL_TEXTURE29 = 34013;
	public static int GL_TEXTURE30 = 34014;
	public static int GL_TEXTURE31 = 34015;
	public static int GL_ACTIVE_TEXTURE = 34016;
	public static int GL_REPEAT = 10497;
	public static int GL_CLAMP_TO_EDGE = 33071;
	public static int GL_MIRRORED_REPEAT = 33648;
	public static int GL_FLOAT_VEC2 = 35664;
	public static int GL_FLOAT_VEC3 = 35665;
	public static int GL_FLOAT_VEC4 = 35666;
	public static int GL_INT_VEC2 = 35667;
	public static int GL_INT_VEC3 = 35668;
	public static int GL_INT_VEC4 = 35669;
	public static int GL_BOOL = 35670;
	public static int GL_BOOL_VEC2 = 35671;
	public static int GL_BOOL_VEC3 = 35672;
	public static int GL_BOOL_VEC4 = 35673;
	public static int GL_FLOAT_MAT2 = 35674;
	public static int GL_FLOAT_MAT3 = 35675;
	public static int GL_FLOAT_MAT4 = 35676;
	public static int GL_SAMPLER_2D = 35678;
	public static int GL_SAMPLER_CUBE = 35680;
	public static int GL_VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
	public static int GL_VERTEX_ATTRIB_ARRAY_SIZE = 34339;
	public static int GL_VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
	public static int GL_VERTEX_ATTRIB_ARRAY_TYPE = 34341;
	public static int GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
	public static int GL_VERTEX_ATTRIB_ARRAY_POINTER = 34373;
	public static int GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
	public static int GL_IMPLEMENTATION_COLOR_READ_TYPE = 35738;
	public static int GL_IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
	public static int GL_COMPILE_STATUS = 35713;
	public static int GL_INFO_LOG_LENGTH = 35716;
	public static int GL_SHADER_SOURCE_LENGTH = 35720;
	public static int GL_SHADER_COMPILER = 36346;
	public static int GL_SHADER_BINARY_FORMATS = 36344;
	public static int GL_NUM_SHADER_BINARY_FORMATS = 36345;
	public static int GL_LOW_FLOAT = 36336;
	public static int GL_MEDIUM_FLOAT = 36337;
	public static int GL_HIGH_FLOAT = 36338;
	public static int GL_LOW_INT = 36339;
	public static int GL_MEDIUM_INT = 36340;
	public static int GL_HIGH_INT = 36341;
	public static int GL_FRAMEBUFFER = 36160;
	public static int GL_RENDERBUFFER = 36161;
	public static int GL_RGBA4 = 32854;
	public static int GL_RGB5_A1 = 32855;
	public static int GL_RGB565 = 36194;
	public static int GL_DEPTH_COMPONENT16 = 33189;
	public static int GL_STENCIL_INDEX = 6401;
	public static int GL_STENCIL_INDEX8 = 36168;
	public static int GL_RENDERBUFFER_WIDTH = 36162;
	public static int GL_RENDERBUFFER_HEIGHT = 36163;
	public static int GL_RENDERBUFFER_INTERNAL_FORMAT = 36164;
	public static int GL_RENDERBUFFER_RED_SIZE = 36176;
	public static int GL_RENDERBUFFER_GREEN_SIZE = 36177;
	public static int GL_RENDERBUFFER_BLUE_SIZE = 36178;
	public static int GL_RENDERBUFFER_ALPHA_SIZE = 36179;
	public static int GL_RENDERBUFFER_DEPTH_SIZE = 36180;
	public static int GL_RENDERBUFFER_STENCIL_SIZE = 36181;
	public static int GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
	public static int GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
	public static int GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
	public static int GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
	public static int GL_COLOR_ATTACHMENT0 = 36064;
	public static int GL_DEPTH_ATTACHMENT = 36096;
	public static int GL_STENCIL_ATTACHMENT = 36128;
	public static int GL_NONE = 0;
	public static int GL_FRAMEBUFFER_COMPLETE = 36053;
	public static int GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
	public static int GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
	public static int GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
	public static int GL_FRAMEBUFFER_UNSUPPORTED = 36061;
	public static int GL_FRAMEBUFFER_BINDING = 36006;
	public static int GL_RENDERBUFFER_BINDING = 36007;
	public static int GL_MAX_RENDERBUFFER_SIZE = 34024;
	public static int GL_INVALID_FRAMEBUFFER_OPERATION = 1286;
	public static int GL_VERTEX_PROGRAM_POINT_SIZE = 34370;

	private int x = 1061109759;
	// Extensions
	public static int GL_COVERAGE_BUFFER_BIT_NV = 32768;
	public static int GL_TEXTURE_MAX_ANISOTROPY_EXT = 34046;
	public static int GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 34047;
	public int Color;
        public static Color rgba8888ToColor(Color color, int value) {
            color.r = (float)((value & 4278190080) >> 24) / 255.0f;
            color.g = (float)((value & 16711680) >> 16) / 255.0f;
            color.b = (float)((value & 65280) >> 8) / 255.0f;
            color.a = (float)(value & 255) / 255.0f;
            
            return color;
        }
        
        public async void Start()
        {
	        Debug.Log(rgba8888ToColor(new Color(),Color) * 255);
	        /*var text = new TextMeshPro();
	        text.color*/
        }

        void Update()
        {

        }
    }
}