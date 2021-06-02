const memoryjs: MemoryJS = require('memoryjs');
import { MemoryJS, Module, Process } from "memoryjs";
import Model from "../Model";

export default class Spell extends Model {

    constructor(process: Process, module: Module, address: number) {
        super(process, module, address);
    }

    
}