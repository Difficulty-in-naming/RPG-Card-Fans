"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csharp_1 = require("csharp");
csharp_1.UnityEngine.Debug.Log('hello world123');
let gameObject = new csharp_1.UnityEngine.GameObject("testobject");
console.log(gameObject.name);
gameObject.transform.position = new csharp_1.UnityEngine.Vector3(1, 2, 3);
