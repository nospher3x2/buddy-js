const memoryjs: MemoryJS = require('memoryjs');
import { MemoryJS, Module, Process } from "memoryjs";

export default class Model {

    public process: Process;
    public module: Module;
    public addressBase: number;

    constructor(process: Process, module: Module, address: number) {
        this.process = process;
        this.module = module;
        this.addressBase = memoryjs.readMemory(process.handle, address, memoryjs.INT);
    }
}