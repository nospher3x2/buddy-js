import Game from "../src/game/Game";
import Script from "../src/script/Script";

export default class AutoSmite extends Script {

    constructor() {
        super({
            name: 'auto_smite',
            displayName: 'Auto Smite',
            author: '@ryannospherys',
            description: 'Auto smites the jungle mob under the cursor'
        });
    }

    public run(game: Game) {
        console.log('to sem net man ;-;');
        
        const player = game.getLocalPlayer();
        // verify player smite;

        const hovered = player.getUnderMouseGameObject();
        console.log(hovered.getHealth())
        const isSmitable = (hovered.getHealth() - 1000) <= 0;
        if(isSmitable) {
            const position = hovered.getPosition();
            // move mouse to position and trigger smite button :p
        } 
    }
}