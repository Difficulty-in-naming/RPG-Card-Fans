import { UnityEngine } from 'csharp';
enum LogType {
    Error = 0,
    Assert = 1,
    Warning = 2,
    Log = 3,
    Exception = 4
}

export class Log{
    private static unity_log_target = null;

    static getPrintStack(type: LogType, showStack : boolean, ...args) {
        let message = '';
        for (let i = 0; i < args.length; i++) {
            const element = args[i];
            if (typeof element === 'object' && Log.LOG_OBJECT_TO_JSON) {
                message += JSON.stringify(element);
            } else {
                message += element;
            }
            if (i < args.length - 1) {
                message += ' ';
            }
        }

        if (showStack || UnityEngine.Application.isEditor) {
            let stacks = new Error().stack.split('\n');
            for (let i = 3; i < stacks.length; i++) {
                const line = stacks[i];
                message += '\n';
                message += line;
            }
        }

        if (!Log.unity_log_target) {
            Log.unity_log_target = new UnityEngine.Object();
        }

        return message;
    }



    static Print(...args): void{
        //if(!GameConfig.debug) return;

        let msg = Log.getPrintStack(LogType.Log, true, args);
        console.log(msg);
    }

    /**
     * Outputs a warning message to the Logger.
     * @param message  list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
     */
    static Warnning(...args): void{
        //if(!GameConfig.debug) return;

        let msg = Log.getPrintStack(LogType.Warning, true, args);
        console.warn(msg);
    }

    /**
     * Outputs an error message to the Logger.
     * @param message A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
     */
    static Error(...args): void{
        //if(!GameConfig.debug) return;

        let msg = Log.getPrintStack(LogType.Error, true, args);
        console.error(msg);
    }

    /** Outputs a stack trace to the Logger.
     * @param message A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
     */
    static Trace(...args): void{
        //if(!GameConfig.debug) return;

        let msg = Log.getPrintStack(LogType.Log, true, args);
        console.log(msg);
    }

    /** Log JavaScript Objects as JSON format */
    static LOG_OBJECT_TO_JSON(...args): boolean{
        return false;
    }

}