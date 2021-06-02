import { SummonerSpellType } from "../enums/SummonerSpellType"

export default {

    getSummonerSpellByName(name: string) {
        const summoners = {
            summonerhaste: SummonerSpellType.GHOST,
            summonerheal: SummonerSpellType.HEAL,
            summonerbarrier: SummonerSpellType.BARRIER,
            summonerexhaust: SummonerSpellType.EXHAUST,
            summonermana: SummonerSpellType.CLARITY,
            summonermark: SummonerSpellType.SNOWBALL,
            summonerflash: SummonerSpellType.FLASH,
            summonerteleport: SummonerSpellType.TELEPORT,
            summonerboost: SummonerSpellType.CLEANSE,
            summonerdot:   SummonerSpellType.IGNITE,
            summonersmite: SummonerSpellType.SMITE,
            s5_summonersmiteplayerganker: SummonerSpellType.SMITE,
            s5_summonersmiteduel: SummonerSpellType.SMITE
        }
        
        return summoners[name];
    },

    getEffectiveDamage(damage: number, armour: number) {
        if(armour >= 0) return damage * 100.0 / (100.0 + armour)
        return damage * (2 - (100/(100 - armour)))
    }
}