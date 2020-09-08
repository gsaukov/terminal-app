import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CommandService {

    commands = new Array('help', 'info', 'overview', 'education')

    constructor(private router: Router) {
    }

    runCommand(command: string): void {
        if(this.commands.indexOf(command) > -1){
            if(command === 'help'){
                this.runHelpCommand()
                return
            }
            if(command === 'info'){
                this.runInfoCommand()
                return
            }
            if(command === 'overview'){
                this.runOverviewCommand()
                return
            }
            if(command === 'education'){
                this.runEducationCommand()
                return
            }
        }
    }

    private runHelpCommand():void {
        this.router.navigate(['/help'])
    }

    private runInfoCommand():void {
        this.router.navigate(['/cv/info'])
    }

    private runOverviewCommand():void {
        this.router.navigate(['/cv/overview'])
    }

    private runEducationCommand():void {
        this.router.navigate(['/cv/education'])
    }
}
