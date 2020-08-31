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

  inputValue: string

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus()
  }

  @HostListener('document:keypress', ['$event'])
  onKeyboardEvent(event: KeyboardEvent) {

  }

  @HostListener('document:click', ['$event'])
  onMouseClick(event: MouseEvent) {
    this.input.nativeElement.focus()
  }

  handleInputSize(event: KeyboardEvent) {
    this.inputValue = this.input.nativeElement.value;
    // $('#cmd span').text($(this).val());
  }

}
