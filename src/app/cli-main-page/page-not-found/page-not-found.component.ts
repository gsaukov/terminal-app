import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, AfterViewInit {

    counter: number = 1000;
    interval: number = 10;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let loader = document.getElementById('loader');
        loader.style.display = 'none';
    }

    tryRedirect(): boolean {
        if (this.counter === 0) {
            this.router.navigate(['/']);
        }
        return true;
    }
}
