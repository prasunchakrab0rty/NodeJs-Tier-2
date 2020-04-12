import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19ConfirmedGlobalComponent } from './covid19-confirmed-global.component';

describe('Covid19ConfirmedGlobalComponent', () => {
  let component: Covid19ConfirmedGlobalComponent;
  let fixture: ComponentFixture<Covid19ConfirmedGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19ConfirmedGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19ConfirmedGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
