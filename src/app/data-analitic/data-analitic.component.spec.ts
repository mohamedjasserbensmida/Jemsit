import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnaliticComponent } from './data-analitic.component';

describe('DataAnaliticComponent', () => {
  let component: DataAnaliticComponent;
  let fixture: ComponentFixture<DataAnaliticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAnaliticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAnaliticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
