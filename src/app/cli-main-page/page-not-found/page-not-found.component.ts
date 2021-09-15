import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  counter:number = 1000
  interval:number = 10
  counterValue:number

  constructor() { }

  ngOnInit(): void {
  }

}
