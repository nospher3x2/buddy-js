const memoryjs: MemoryJS = require('memoryjs');
import { DataType, MemoryJS, Module, Process } from "memoryjs";
import IPosition from "../../misc/interfaces/IPosition";
import offsets from "../offsets";
import Model from "./Model";

export default class GameObject extends Model {

    private index: number;
    private team: number;
    private position: IPosition;
    private health: number;
    private maxHealth: number;
    private baseAttack: number;
    private bonusAttack: number;
    private armour: number;
    private magicResist: number;
    private duration: number;
    private critMulti: number;
    private crit: number;
    private abilityPower: number;
    private attackSpeedMulti: number;
    private movementSpeed: number;
    private networkID: number;
    private visible: boolean;
 
    constructor(process: Process, module: Module, address: number) {
        super(process, module, address);

        this.index = this.readMemory(offsets.ObjectIndex, memoryjs.SHORT);
        this.team = this.readMemory(offsets.ObjectTeam, memoryjs.SHORT);
        this.position = this.readMemory(offsets.ObjectPosition, memoryjs.VEC3);
        this.health = this.readMemory(offsets.ObjectHealth, memoryjs.FLOAT);
        this.maxHealth = this.readMemory(offsets.ObjectMaxHealth, memoryjs.FLOAT);
        this.baseAttack = this.readMemory(offsets.ObjectBaseAtk, memoryjs.FLOAT);
        this.bonusAttack = this.readMemory(offsets.ObjectBonusAtk, memoryjs.FLOAT);
        this.armour = this.readMemory(offsets.ObjectArmor, memoryjs.FLOAT);
        this.magicResist = this.readMemory(offsets.ObjectMagicRes, memoryjs.FLOAT);
        this.duration = this.readMemory(offsets.ObjectExpiry, memoryjs.FLOAT);
        this.critMulti = this.readMemory(offsets.ObjectCritMulti, memoryjs.FLOAT);
        this.crit = this.readMemory(offsets.ObjectCrit, memoryjs.FLOAT);
        this.abilityPower = this.readMemory(offsets.ObjectAbilityPower, memoryjs.FLOAT);
        this.attackSpeedMulti = this.readMemory(offsets.ObjectAtkSpeedMulti, memoryjs.FLOAT);
        this.movementSpeed = this.readMemory(offsets.ObjectMoveSpeed, memoryjs.FLOAT);
        this.networkID = this.readMemory(offsets.ObjectNetworkID, memoryjs.DWORD);
        this.visible = this.readMemory(offsets.ObjectVisibility, memoryjs.BOOL);

    }

    public getIndex(): number {
        return this.index;
    }

    public getTeam(): number {
        return this.team;
    }

    public getPosition(): IPosition {
        return this.position;
    }

    public getHealth(): number {
        return this.health;
    }

    public getMaxHealth(): number {
        return this.maxHealth;
    }

    public getBaseAttack(): number {
        return this.baseAttack;
    }

    public getBonusAttack(): number {
        return this.bonusAttack;
    }

    public getArmour(): number {
        return this.armour;
    }

    public getMagicResist(): number {
        return this.magicResist;
    }

    public getDuration(): number {
        return this.duration;
    }

    public getCritMulti(): number {
        return this.critMulti;
    }

    public getCrit(): number {
        return this.crit;
    }

    public getAbilityPower(): number {
        return this.abilityPower;
    }
    
    public getAttackSpeedMulti(): number {
        return this.attackSpeedMulti;
    }

    public getMovementSpeed(): number {
        return this.movementSpeed;
    }

    public getNetworkID(): number {
        return this.networkID;
    }

    public isVisible(): boolean {
        return this.visible;
    }

    public isAlive(): boolean {
        return this.health > 0;
    }

    public readMemory(offset: number, datatype: DataType) {
        return memoryjs.readMemory(this.process.handle, this.addressBase + offset, datatype);
    }
}