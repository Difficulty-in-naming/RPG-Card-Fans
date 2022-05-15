using ModTheSpire.Card;
using ModTheSpire.Relics;
using ModTheSpire.Unit.Loader;

namespace ModTheSpire.Unit.Character
{
    public interface IPlayerInfo 
    {
        /// 名称
        string Name { get; }
        /// 角色描述
        string Description { get;  }
        /// 篝火图片
        string Shoulder { get;  }
        /// 篝火图片2
        string Shoulder2 { get;  }
        /// 选择角色时显示的大图
        string Portrait { get;  }
        /// 选择角色按钮图片
        string CharSelectButton { get;  }
        //初始遗物Id
        AbstractRelic[] InitRelic { get; }
        AbstractCard[] InitCard { get; }
        int Health { get; }
        int Gold { get; }
        ILoader Loader { get; }
    }
}
