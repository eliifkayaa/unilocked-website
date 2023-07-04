import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetRightComponent } from './planet-right.component';

describe('PlanetRightComponent', () => {
  let component: PlanetRightComponent;
  let fixture: ComponentFixture<PlanetRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
