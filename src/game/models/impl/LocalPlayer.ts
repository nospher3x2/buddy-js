const memoryjs: MemoryJS = require('memoryjs');
import { MemoryJS, Module, Process } from "memoryjs";
import Game from "../../Game";
import offsets from "../../offsets";
import GameObject from "../GameObject";

export default class LocalPlayer extends GameObject {

    constructor(process: Process, module: Module) {
        super(process, module, module.modBaseAddr + offsets.LocalPlayer)
    }

    public getUnderMouseGameObject() {
        const memory = this.readMemory(offsets.UnderMouseObject, memoryjs.DWORD);
        return new GameObject(this.process, this.module, this.module.modBaseAddr + memory);
    }
}