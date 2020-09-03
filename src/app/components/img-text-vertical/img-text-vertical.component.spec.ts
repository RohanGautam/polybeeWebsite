import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTextVerticalComponent } from './img-text-vertical.component';

describe('ImgTextVerticalComponent', () => {
  let component: ImgTextVerticalComponent;
  let fixture: ComponentFixture<ImgTextVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTextVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTextVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
