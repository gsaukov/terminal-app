import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliMainPageComponent } from './cli-main-page.component';

describe('CliMainPageComponent', () => {
  let component: CliMainPageComponent;
  let fixture: ComponentFixture<CliMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
