import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairSalonComponent } from './hair-salon.component';

describe('HairSalonComponent', () => {
  let component: HairSalonComponent;
  let fixture: ComponentFixture<HairSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairSalonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
