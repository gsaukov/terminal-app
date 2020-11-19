import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {DownloadCvService} from "./download-cv.service";

@Injectable({
    providedIn: 'root'
})
export class CommandService {

    commands = new Array('help', 'info', 'overview', 'education', 'employment', 'download')

    constructor(private router: Router,
                private downloadCvService: DownloadCvService) {
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
            if(command === 'employment'){
                this.runEmploymentCommand()
                return
            }
            if(command === 'download'){
                this.runDownloadCvCommand()
                return
            }
        } else {
            this.runHelpCommand(true)
            return
        }
    }

    private runHelpCommand(unknownCommand: boolean = false):void {
        this.router.navigate(['/help'], {queryParams: {unknownCommand: unknownCommand}})
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

    private runEmploymentCommand() {
        this.router.navigate(['/cv/employment'])
    }

    private runDownloadCvCommand() {
        this.downloadCvService.downloadCv()
    }
}
