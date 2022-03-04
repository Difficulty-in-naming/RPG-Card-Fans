using System.Collections;
using System.Collections.Generic;
using UnityEngine;
 
public class BezierUtils
{
    public static Vector2 CalculateQuadraticCurve2D(Vector3 pos0, Vector3 pos1, Vector3 pos2, float t)
    {
        //2 points with ONE control Points means Quadratic
        // Mathematical Formula of Quadratic Curves
        Vector3 res = ((1 - t) * (1 - t) * pos0) + (2 * (1 - t) * t * pos1) + t * t * pos2;

        return new Vector2(res.x, res.y);

    }

    //B(t) = (1-t)3P0 + 3(1-t)2tP1 + 3(1-t)t2P2 + t3P3 , 0 < t< 1 
    public static Vector3 CalculateQubicCurve3D(Vector3 pos0, Vector3 pos1, Vector3 pos2, Vector3 pos3, float t)
    {
        //2 points with TWO control Points means Qubic
        // Mathematical Formula of Qubic Curves
        //B(t) = (1-t)3P0 + 3(1-t)2tP1 + 3(1-t)t2P2 + t3P3 , 0 < t< 1  
        Vector3 res = ((1 - t) * (1 - t) * (1 - t) * pos0) + (3 * (1 - t) * (1 - t) * t * pos1) + (3 * (1 - t) * (1 - t) * t * pos2) + (t * t * t * pos3);

        return res;
    }

    public static Vector2 CalculateQubicCurve2D(Vector3 pos0, Vector3 pos1, Vector3 pos2, Vector3 pos3, float t)
    {
        // Mathematical Formula of Qubic Curves
        //B(t) = (1-t)3P0 + 3(1-t)2tP1 + 3(1-t)t2P2 + t3P3 , 0 < t< 1  
        Vector3 res = ((1 - t) * (1 - t) * (1 - t) * pos0) + (3 * (1 - t) * (1 - t) * t * pos1) + (3 * (1 - t) * (1 - t) * t * pos2) + (t * t * t * pos3);

        return new Vector2(res.x, res.y);
    }
}