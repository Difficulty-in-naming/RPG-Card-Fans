using System.Collections.Generic;
using FairyGUI.Utils;
using UnityEngine;

namespace FairyGUI
{
    /// <summary>
    /// GRichTextField class.
    /// </summary>
    public class GRichTextField : GTextField
    {
        /// <summary>
        /// 
        /// </summary>
        public RichTextField richTextField { get; private set; }

        public GRichTextField()
            : base()
        {
        }

        override protected void CreateDisplayObject()
        {
            richTextField = new RichTextField();
            richTextField.gOwner = this;
            displayObject = richTextField;

            TextField = richTextField.textField;
        }

        override protected void SetTextFieldText()
        {
            string str = _text;
            if (_templateVars != null)
                str = ParseTemplate(str);

            TextField.maxWidth = maxWidth;
            if (_ubbEnabled)
                richTextField.htmlText = UBBParser.inst.Parse(str);
            else
                richTextField.htmlText = str;
        }

        /// <summary>
        /// 
        /// </summary>
        public Dictionary<uint, Emoji> emojies
        {
            get { return richTextField.emojies; }
            set { richTextField.emojies = value; }
        }
    }
}
