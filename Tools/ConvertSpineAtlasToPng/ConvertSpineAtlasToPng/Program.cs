using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Net.Mime;
using System.Reflection;
using Spine;

namespace ConvertSpineAtlasToPng
{
    class Program
    {
        static void Main(string[] args)
        {
            var dir = Path.GetDirectoryName(args[0]) + "/";
            Spine.Atlas a = new Atlas(args[0],new Loader());
            var list = (List<AtlasRegion>)a.GetType().GetField("regions", BindingFlags.Instance | BindingFlags.NonPublic).GetValue(a);
            foreach (var node in list)
            {
                var image = Image.FromFile(dir + node.page.name);
                var from = new Bitmap(image);
                var to = new Bitmap(node.width, node.height);
                for (int x = node.x, jx = 0; jx < node.width; jx++, x++)
                {
                    for (int y = node.y, jy = 0; jy < node.height; jy++, y++)
                    {
                        to.SetPixel(jx, jy, from.GetPixel(x, y));
                    }
                }

                var savePath = dir + Path.GetFileNameWithoutExtension(node.page.name) + "/" + node.name;
                Directory.CreateDirectory(Path.GetDirectoryName(savePath));
                to.Save(savePath + ".png", ImageFormat.Png);
            }
            
        }

        public class Loader : TextureLoader
        {
            public void Load(AtlasPage page, string path)
            {
            }

            public void Unload(object texture)
            {
            }
        }
    }
}