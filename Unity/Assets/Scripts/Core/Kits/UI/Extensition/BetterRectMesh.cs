using UnityEngine;

namespace FairyGUI
{
    /// <summary>
    /// 因为谷主不肯修改源代码所以这里我们自己新建一个RectMesh处理
    /// </summary>
    public class BetterRectMesh : IMeshFactory, IHitTest
    {
        /// <summary>
        /// 
        /// </summary>
        public Rect? drawRect;

        /// <summary>
        /// 
        /// </summary>
        public float lineWidth;

        /// <summary>
        /// 
        /// </summary>
        public Color32 lineColor;

        /// <summary>
        /// 
        /// </summary>
        public Color32? fillColor;

        /// <summary>
        /// 
        /// </summary>
        public Color32[] colors;

        public BetterRectMesh()
        {
            lineColor = Color.black;
        }

        public void OnPopulateMesh(VertexBuffer vb)
        {
            Rect rect = drawRect != null ? (Rect)drawRect : vb.contentRect;
            Color32 color = fillColor != null ? (Color32)fillColor : vb.vertexColor;
            if (lineWidth == 0)
            {
                if (color.a != 0)//optimized
                    vb.AddQuad(rect, color);
            }
            else
            {
                Rect part;

                //left,right
                part = new Rect(rect.x, rect.y, lineWidth, rect.height);
                vb.AddQuad(part, lineColor);
                part = new Rect(rect.xMax - lineWidth, rect.y, lineWidth, rect.height);
                vb.AddQuad(part, lineColor);

                //top, bottom
                part = new Rect(rect.x + lineWidth, rect.y, rect.width - lineWidth * 2, lineWidth);
                vb.AddQuad(part, lineColor);
                part = new Rect(rect.x + lineWidth, rect.yMax - lineWidth, rect.width - lineWidth * 2, lineWidth);
                vb.AddQuad(part, lineColor);

                //middle
                if (color.a != 0)//optimized
                {
                    part = Rect.MinMaxRect(rect.x + lineWidth, rect.y + lineWidth, rect.xMax - lineWidth, rect.yMax - lineWidth);
                    if (part.width > 0 && part.height > 0)
                        vb.AddQuad(part, color);
                }
            }

            if (colors != null)
                vb.RepeatColors(colors, 0, vb.currentVertCount);

            vb.AddTriangles();
        }

        public bool HitTest(Rect contentRect, Vector2 point)
        {
            return drawRect?.Contains(point) ?? contentRect.Contains(point);
        }
    }
}
