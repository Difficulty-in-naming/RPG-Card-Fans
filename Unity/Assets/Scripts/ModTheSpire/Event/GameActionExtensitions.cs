using ModTheSpire.Unit;

namespace ModTheSpire.Event
{
    public static class GameActionExtensitions
    {
        public static bool ShouldCancelAction(this IGameAction action,AbstractCreature unit) {
            return unit == null || unit.IsDying || unit.IsDeadOrEscaped;
        }
    }
}