import { Module, Process } from 'memoryjs';
import Game from './game/Game';
import LeagueConnector from './misc/events/LeagueConnectorEvent';
import ScriptManager from './script/manager/ScriptManager';

const connector = new LeagueConnector()

new ScriptManager().load();
ScriptManager.start(null, null);


connector.on('connect', (process: Process, module: Module)=> {
    console.log('League of Legends started');
    setInterval(()=> {
        const game = new Game(process, module);
        const player = game.getLocalPlayer();
    
        console.clear();
        console.log('-------- GAME -------')
        console.log(`GameTime: ${game.getGameTime()}`)
        console.log('-------- PLAYER -------')
        console.log(`Team: ${player.getTeam()}`)
        console.log(`Position: ${JSON.stringify(player.getPosition())}`)
        console.log(`Health: ${player.getHealth()}/${player.getMaxHealth()}`)
        console.log(`Base Attack: ${player.getBaseAttack()}`)
        console.log(`Bonus Attack: ${player.getBonusAttack()}`)
        console.log(`Armour: ${player.getArmour()}`)
        console.log(`Magic Resist: ${player.getMagicResist()}`)
        console.log(`Duration: ${player.getDuration()}`)
        console.log(`Visible: ${player.isVisible()}`)
        console.log(`NetworkID: ${player.getNetworkID()}`)
        
    }, 1000)
})

connector.on('disconnect', ()=> {
    console.log('League of Legends closed');
})

connector.start(); 