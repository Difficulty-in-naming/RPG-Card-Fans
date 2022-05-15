using UnityEngine;

public class DemoScript : MonoBehaviour
{
    public int handSize;
    public int deckSize;

    public CardsPile hand;
    public CardsPile deck;

    public GameObject cardPrefab;

    void Start()
    {
        for (int i = 0; i < handSize; i++)
            hand.Add(Instantiate(cardPrefab), false);
        
        for (int i = 0; i < deckSize; i++)
            deck.Add(Instantiate(cardPrefab), false);
    }

    public void SpawnCard()
    {
        if (deck.Cards.Count == 0)
            return;

        GameObject card = deck.Cards[deck.Cards.Count - 1];
        deck.Remove(card);
        hand.Add(card, 0);
    }

    public void RemoveCard()
    {
        if (hand.Cards.Count == 0)
            return;
        
        GameObject card = hand.Cards[hand.Cards.Count - 1];
        hand.Remove(card);
        deck.Add(card);
    }
}
