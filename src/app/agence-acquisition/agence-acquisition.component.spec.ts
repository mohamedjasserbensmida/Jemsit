import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceAcquisitionComponent } from './agence-acquisition.component';

describe('AgenceAcquisitionComponent', () => {
  let component: AgenceAcquisitionComponent;
  let fixture: ComponentFixture<AgenceAcquisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceAcquisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
