public struct Language
{
    public string Key { get; }
    public string Name { get; }
    public int Id { get; }
#if UNITY_EDITOR
    public string EditorName { get; }
#endif
    private Language(string key, string name, int id, string editorName)
    {
        Key = key;
        Name = name;
        Id = id;
#if UNITY_EDITOR
        EditorName = editorName;
#endif
    }

    public static Language None = new Language("none", "none", 0, "错误");
    public static Language English = new Language("en", "english", 1, "英语");
    public static Language Chinese = new Language("zh-cn", "简体中文", 2, "简体中文");
    public static Language Chinese_tw = new Language("zh-tw", "繁體中文", 3, "繁体中文");
    public static Language French = new Language("fr", "français", 4, "法语");
    public static Language Italian = new Language("it", "italiano", 5, "意大利语");
    public static Language German = new Language("de", "Deutsche", 6, "德语");
    public static Language Spanish = new Language("es", "Español", 7, "西班牙语");
    public static Language Dutch = new Language("en", "Dutch", 8, "荷兰语");
    public static Language Russian = new Language("en", "Russian", 9, "俄语");
    public static Language Korean = new Language("en", "Korean", 10, "韩语");
    public static Language Japanese = new Language("en", "Japanese", 11, "日语");
    public static Language Hungarian = new Language("en", "Hungarian", 12, "匈牙利语");
    public static Language Portugese = new Language("pt", "Português", 13, "葡萄牙语");
    public static Language Thai = new Language("th", "ไทย", 14, "泰语"); //th
    public static Language Indonesian = new Language("id", "bahasa Indonesia", 15, "印度尼西亚语");
    public static Language[] All = { Chinese, Chinese_tw, English, Italian, Spanish, French, German, Portugese, Thai, Indonesian };

    public static Language CurrentLanguage { get; set; } = Chinese;

    public static Language Map(int id)
    {
        foreach (var node in All)
        {
            if (node.Id == id)
                return node;
        }

        return None;
    }
    
    public static Language Map(string key)
    {
        foreach (var node in All)
        {
            if (node.Key == key)
                return node;
        }

        return None;
    }
    
    public static Language MapFromName(string name)
    {
        foreach (var node in All)
        {
            if (node.Name == name)
                return node;
        }

        return None;
    }
}