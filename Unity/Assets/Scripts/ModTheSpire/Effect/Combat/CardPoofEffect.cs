using ModTheSpire.Dungeon;

namespace ModTheSpire.Effect.Combat
{
    public class CardPoofEffect : AbstractEffect
    {
        public CardPoofEffect(float x, float y)
        {
            for (int i = 0; i < 50; i++)
            {
                DungeonManager.EffectManager.Play(new CardPoofParticle(x, y));
            }

            Finish();
        }
    }
}