using System.Collections.Generic;
using System.Text;
using UnityEngine;
using FairyGUI.Utils;

namespace FairyGUI
{
    /// <summary>
    /// 
    /// </summary>
    public class GTextField : GObject, ITextColorGear
    {
        public TextField TextField { get; protected set; }
        protected string _text;
        protected bool _ubbEnabled;
        protected bool _updatingSize;
        protected Dictionary<string, string> _templateVars;

        public GTextField()
            : base()
        {
            TextFormat tf = TextField.textFormat;
            tf.font = UIConfig.defaultFont;
            tf.size = 12;
            tf.color = Color.black;
            tf.lineSpacing = 3;
            tf.letterSpacing = 0;
            TextField.textFormat = tf;

            _text = string.Empty;
            TextField.autoSize = AutoSizeType.Both;
            TextField.wordWrap = false;
        }

        override protected void CreateDisplayObject()
        {
            TextField = new TextField();
            TextField.gOwner = this;
            displayObject = TextField;
        }

        /// <summary>
        /// 
        /// </summary>
        override public string text
        {
            get
            {
                if (this is GTextInput)
                    _text = ((GTextInput)this).inputTextField.text;
                return _text;
            }
            set
            {
                if (value == null)
                    value = string.Empty;
                _text = value;
                SetTextFieldText();
                UpdateSize();
                UpdateGear(6);
            }
        }

        virtual protected void SetTextFieldText()
        {
            string str = _text;
            if (_templateVars != null)
                str = ParseTemplate(str);

            TextField.maxWidth = maxWidth;
            if (_ubbEnabled)
                TextField.htmlText = UBBParser.inst.Parse(XMLUtils.EncodeString(str));
            else
                TextField.text = str;
        }

        /// <summary>
        /// 
        /// </summary>
        public Dictionary<string, string> templateVars
        {
            get { return _templateVars; }
            set
            {
                if (_templateVars == null && value == null)
                    return;

                _templateVars = value;

                FlushVars();
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="name"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public GTextField SetVar(string name, string value)
        {
            if (_templateVars == null)
                _templateVars = new Dictionary<string, string>();
            _templateVars[name] = value;

            return this;
        }

        /// <summary>
        /// 
        /// </summary>
        public void FlushVars()
        {
            SetTextFieldText();
            UpdateSize();
        }

        /// <summary>
        /// 
        /// </summary>
        public bool HasCharacter(char ch)
        {
            return TextField.HasCharacter(ch);
        }

        protected string ParseTemplate(string template)
        {
            int pos1 = 0, pos2 = 0;
            int pos3;
            string tag;
            string value;
            StringBuilder buffer = new StringBuilder();

            while ((pos2 = template.IndexOf('{', pos1)) != -1)
            {
                if (pos2 > 0 && template[pos2 - 1] == '\\')
                {
                    buffer.Append(template, pos1, pos2 - pos1 - 1);
                    buffer.Append('{');
                    pos1 = pos2 + 1;
                    continue;
                }

                buffer.Append(template, pos1, pos2 - pos1);
                pos1 = pos2;
                pos2 = template.IndexOf('}', pos1);
                if (pos2 == -1)
                    break;

                if (pos2 == pos1 + 1)
                {
                    buffer.Append(template, pos1, 2);
                    pos1 = pos2 + 1;
                    continue;
                }

                tag = template.Substring(pos1 + 1, pos2 - pos1 - 1);
                pos3 = tag.IndexOf('=');
                if (pos3 != -1)
                {
                    if (!_templateVars.TryGetValue(tag.Substring(0, pos3), out value))
                        value = tag.Substring(pos3 + 1);
                }
                else
                {
                    if (!_templateVars.TryGetValue(tag, out value))
                        value = "";
                }
                buffer.Append(value);
                pos1 = pos2 + 1;
            }
            if (pos1 < template.Length)
                buffer.Append(template, pos1, template.Length - pos1);

            return buffer.ToString();
        }

        /// <summary>
        /// 
        /// </summary>
        public TextFormat textFormat
        {
            get
            {
                return TextField.textFormat;
            }
            set
            {
                TextField.textFormat = value;
                if (!underConstruct)
                    UpdateSize();
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public Color color
        {
            get
            {
                return TextField.textFormat.color;
            }
            set
            {
                if (TextField.textFormat.color != value)
                {
                    TextFormat tf = TextField.textFormat;
                    tf.color = value;
                    TextField.textFormat = tf;
                    UpdateGear(4);
                }
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public AlignType align
        {
            get { return TextField.align; }
            set { TextField.align = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        public VertAlignType verticalAlign
        {
            get { return TextField.verticalAlign; }
            set { TextField.verticalAlign = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        public bool singleLine
        {
            get { return TextField.singleLine; }
            set { TextField.singleLine = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        public float stroke
        {
            get { return TextField.stroke; }
            set { TextField.stroke = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        public Color strokeColor
        {
            get { return TextField.strokeColor; }
            set
            {
                TextField.strokeColor = value;
                UpdateGear(4);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public Vector2 shadowOffset
        {
            get { return TextField.shadowOffset; }
            set { TextField.shadowOffset = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        public bool UBBEnabled
        {
            get { return _ubbEnabled; }
            set { _ubbEnabled = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        public AutoSizeType autoSize
        {
            get { return TextField.autoSize; }
            set
            {
                TextField.autoSize = value;
                if (value == AutoSizeType.Both)
                {
                    TextField.wordWrap = false;

                    if (!underConstruct)
                        this.SetSize(TextField.textWidth, TextField.textHeight);
                }
                else
                {
                    TextField.wordWrap = true;

                    if (value == AutoSizeType.Height)
                    {
                        if (!underConstruct)
                        {
                            displayObject.width = this.width;
                            this.height = TextField.textHeight;
                        }
                    }
                    else
                        displayObject.SetSize(this.width, this.height);
                }
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public float textWidth
        {
            get { return TextField.textWidth; }
        }

        /// <summary>
        /// 
        /// </summary>
        public float textHeight
        {
            get { return TextField.textHeight; }
        }

        protected void UpdateSize()
        {
            if (_updatingSize)
                return;

            _updatingSize = true;

            if (TextField.autoSize == AutoSizeType.Both)
            {
                this.size = displayObject.size;
                InvalidateBatchingState();
            }
            else if (TextField.autoSize == AutoSizeType.Height)
            {
                this.height = displayObject.height;
                InvalidateBatchingState();
            }

            _updatingSize = false;
        }

        override protected void HandleSizeChanged()
        {
            if (_updatingSize)
                return;

            if (underConstruct)
                displayObject.SetSize(this.width, this.height);
            else if (TextField.autoSize != AutoSizeType.Both)
            {
                if (TextField.autoSize == AutoSizeType.Height)
                {
                    displayObject.width = this.width;//先调整宽度，让文本重排
                    if (_text != string.Empty) //文本为空时，1是本来就不需要调整， 2是为了防止改掉文本为空时的默认高度，造成关联错误
                        SetSizeDirectly(this.width, displayObject.height);
                }
                else
                    displayObject.SetSize(this.width, this.height);
            }
        }

        override public void Setup_BeforeAdd(ByteBuffer buffer, int beginPos)
        {
            base.Setup_BeforeAdd(buffer, beginPos);

            buffer.Seek(beginPos, 5);

            TextFormat tf = TextField.textFormat;

            tf.font = buffer.ReadS();
            tf.size = buffer.ReadShort();
            tf.color = buffer.ReadColor();
            this.align = (AlignType)buffer.ReadByte();
            this.verticalAlign = (VertAlignType)buffer.ReadByte();
            tf.lineSpacing = buffer.ReadShort();
            tf.letterSpacing = buffer.ReadShort();
            _ubbEnabled = buffer.ReadBool();
            this.autoSize = (AutoSizeType)buffer.ReadByte();
            tf.underline = buffer.ReadBool();
            tf.italic = buffer.ReadBool();
            tf.bold = buffer.ReadBool();
            this.singleLine = buffer.ReadBool();
            if (buffer.ReadBool())
            {
                tf.outlineColor = buffer.ReadColor();
                tf.outline = buffer.ReadFloat();
            }

            if (buffer.ReadBool())
            {
                tf.shadowColor = buffer.ReadColor();
                float f1 = buffer.ReadFloat();
                float f2 = buffer.ReadFloat();
                tf.shadowOffset = new Vector2(f1, f2);
            }

            if (buffer.ReadBool())
                _templateVars = new Dictionary<string, string>();

            if (buffer.version >= 3)
            {
                tf.strikethrough = buffer.ReadBool();
#if FAIRYGUI_TMPRO
                tf.faceDilate = buffer.ReadFloat();
                tf.outlineSoftness = buffer.ReadFloat();
                tf.underlaySoftness = buffer.ReadFloat();
#else
                buffer.Skip(12);
#endif
            }

            TextField.textFormat = tf;
        }

        override public void Setup_AfterAdd(ByteBuffer buffer, int beginPos)
        {
            base.Setup_AfterAdd(buffer, beginPos);

            buffer.Seek(beginPos, 6);

            string str = buffer.ReadS();
            if (str != null)
                this.text = str;
        }
    }
}
