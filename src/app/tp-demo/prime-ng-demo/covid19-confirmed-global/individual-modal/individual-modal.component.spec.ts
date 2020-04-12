import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualModalComponent } from './individual-modal.component';

describe('IndividualModalComponent', () => {
  let component: IndividualModalComponent;
  let fixture: ComponentFixture<IndividualModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
