import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionElementComponent } from './decision-element.component';

describe('DecisionElementComponent', () => {
  let component: DecisionElementComponent;
  let fixture: ComponentFixture<DecisionElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
