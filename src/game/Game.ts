const memoryjs: MemoryJS = require('memoryjs');
import { MemoryJS, Module, Process } from "memoryjs";
import LocalPlayer from "./models/impl/LocalPlayer";
import Model from "./models/Model";
import offsets from "./offsets";

export default class Game extends Model {

    constructor(process: Process, module: Module) {
        super(process, module, process.modBaseAddr);
    }

    public getLocalPlayer() {
        return new LocalPlayer(this.process, this.module);
    }
    
    public getGameTime() {
        const address = this.module.modBaseAddr + offsets.GameTime
        return memoryjs.readMemory(this.process.handle, address, memoryjs.FLOAT);
    }
}