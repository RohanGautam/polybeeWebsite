import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionComponentComponent } from './solution-component.component';

describe('SolutionComponentComponent', () => {
  let component: SolutionComponentComponent;
  let fixture: ComponentFixture<SolutionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
