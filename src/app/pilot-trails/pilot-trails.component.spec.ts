import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotTrailsComponent } from './pilot-trails.component';

describe('PilotTrailsComponent', () => {
  let component: PilotTrailsComponent;
  let fixture: ComponentFixture<PilotTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
