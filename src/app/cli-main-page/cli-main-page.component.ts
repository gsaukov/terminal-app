import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus()
  }

  @HostListener('document:keypress', ['$event'])
  onKeyboardEvent(event: KeyboardEvent) {
    if (this.arrowKeys.indexOf(event.keyCode) !== -1) {
      //disable arrows
      event.preventDefault()
      event.stopPropagation()
    }
    if(event.keyCode === 13){
      //add data to console and clear
      this.wellData.push(this.inputValue)
      this.inputValue = ''
      this.input.nativeElement.value = ''
    }
  }

  @HostListener('document:click', ['$event'])
  onMouseClick(event: MouseEvent) {
    this.input.nativeElement.focus()
  }

  handleInputSize(event: KeyboardEvent) {
    this.inputValue = this.input.nativeElement.value;
  }

}
