import Game from "../game/Game";
import IScriptConfig from "../misc/interfaces/IScriptConfig";

interface IScript {
    run: (game: Game)=> unknown;
}

export default class Script implements IScript {

    public config: IScriptConfig;
    public enabled: boolean = false;

    constructor(config: IScriptConfig) {
        this.config = config;
        this.enabled = true;
    };

    public run(game: Game) {

    }
}