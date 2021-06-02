const memoryjs: MemoryJS = require('memoryjs');
import { MemoryJS, Module, Process } from 'memoryjs';
import { EventEmitter } from 'events';

export default class LeagueConnectorEvent extends EventEmitter {

    private watching: NodeJS.Timeout;
    private open: boolean;

    constructor() {
        super();

        this.watching = setInterval(async()=> {
            
            let processObject: Process
            let clientModule: Module;

            try {
                processObject = memoryjs.openProcess('League of Legends.exe');
                clientModule = memoryjs.findModule('League of Legends.exe', processObject.th32ProcessID);
            } catch {
                processObject = undefined;
                clientModule = undefined;
            }
                
            if(!clientModule && this.open) {
                this.open = false;
                return this.emit('disconnect');
            }

           if(clientModule && !this.open) {
                this.open = true;
                return this.emit('connect', processObject, clientModule)
            }
        }, 1000);
    }

    start() {
        this.open = false;
        this.watching;
    }

    stop() {
        this.watching.unref();
    }
}