import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutDetailComponent } from './haircut-detail.component';

describe('HaircutDetailComponent', () => {
  let component: HaircutDetailComponent;
  let fixture: ComponentFixture<HaircutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaircutDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaircutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
