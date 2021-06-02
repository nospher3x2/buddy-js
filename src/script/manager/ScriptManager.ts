import { Module, Process } from "memoryjs";
import fs from "fs";
import Script from "../Script";
import Game from "../../game/Game";

export default class ScriptManager {

    public static readonly scripts: Script[]= [];

    public path: string;

    constructor(path?: string) {
        this.path = path ? path : `${process.cwd()}/scripts/`;
    }

    public static start(process: Process, module: Module) {
        const scripts = ScriptManager.scripts.filter((script)=> script.enabled);
        return setInterval(()=> scripts.forEach((script)=> script.run(new Game(process, module))), 500);
    }

    public load() {
        const archives = fs.readdirSync(this.path).filter((archive)=> archive.toLowerCase().includes(".ts"));
        for(var i = 0; i < archives.length; i++) {
            const archive = archives[i];
            const preScript = require(`${process.cwd()}/scripts/${archive}`).default;
            const script: Script = new preScript();
            if(script.config) {
                ScriptManager.scripts.push(script);
                console.log(`[BuddyJS] Loaded ${script.config.name} by ${script.config.author}`);
            }
        }
    }
}