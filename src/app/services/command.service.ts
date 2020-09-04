import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CommandService {

    commands = new Array('help', 'info')

    constructor(private router: Router) {
    }

    runCommand(command: string): void {
        if(this.commands.indexOf(command) > -1){
            if(command === 'help'){
                this.runHelpCommand()
                return
            }
        }
    }

    private runHelpCommand():void {
        this.router.navigate(['/help'])
    }
}
