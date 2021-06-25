using System;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public Texture2D cursorTexture;
    public CursorMode cursorMode = CursorMode.Auto;
    public Vector2 hotSpot = Vector2.zero;
    public Vector2 CursorSize = new Vector2(16, 16);
    void Start()
    {
        Cursor.visible = false;
        //Cursor.SetCursor(cursorTexture, hotSpot, cursorMode);
    }

    void OnGUI()
    {
        GUI.DrawTexture(
            new Rect(Event.current.mousePosition.x - CursorSize.x,
                Event.current.mousePosition.y - CursorSize.y, CursorSize.x, CursorSize.y), cursorTexture);
    }
}
