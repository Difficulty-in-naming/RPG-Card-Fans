export default class Async{
    public static async Delay(ms: number) {
        await new Promise(resolve => setTimeout(resolve, ms));
    }
}