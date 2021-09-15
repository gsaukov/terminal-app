import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {CommandService} from "../services/command.service";
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-cli-main-page',
  templateUrl: './cli-main-page.component.html',
  styleUrls: ['./cli-main-page.component.css']
})
export class CliMainPageComponent implements OnInit, AfterViewInit  {

  @ViewChild('input') input: ElementRef
  @ViewChild('cmd') cmd: ElementRef
  @ViewChild('span') span: ElementRef
  @ViewChild('cursor') cursor: ElementRef

  arrowKeys = new Array(37, 38, 39, 40)
  inputValue: string
  wellData = []
  desktop: boolean
  deviceType: string

  constructor(private commandService: CommandService,
              private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.desktop = this.deviceService.isDesktop()
    this.deviceType = this.deviceService.getDeviceInfo().device
  }

  ngAfterViewInit(): void {
    let loader = document.getElementById('loader')
    loader.style.display = "none";
    this.input.nativeElement.addEventListener('keydown', event => {
      if (this.arrowKeys.indexOf(event.keyCode) > -1) {
        event.preventDefault()
        event.stopPropagation()
      }
    })
    this.input.nativeElement.focus()
  }

  @HostListener('document:keypress', ['$event'])
  onKeyboardEvent(event: KeyboardEvent) {
    if(event.keyCode === 13){
      //add data to console and clear
      const value = this.inputValue
      this.commandService.runCommand(value)
      // this.wellData.push(value)
      this.inputValue = ''
      this.input.nativeElement.value = ''
    }
  }

  @HostListener('document:click', ['$event'])
  onMouseClick(event: MouseEvent) {
    this.input.nativeElement.focus()
  }

  handleInputSize(event: KeyboardEvent) {
    this.inputValue = this.input.nativeElement.value
  }

}
