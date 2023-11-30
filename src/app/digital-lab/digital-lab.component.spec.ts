import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalLabComponent } from './digital-lab.component';

describe('DigitalLabComponent', () => {
  let component: DigitalLabComponent;
  let fixture: ComponentFixture<DigitalLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
