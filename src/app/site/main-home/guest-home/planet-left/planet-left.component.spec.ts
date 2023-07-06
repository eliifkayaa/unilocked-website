import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetLeftComponent } from './planet-left.component';

describe('PlanetLeftComponent', () => {
  let component: PlanetLeftComponent;
  let fixture: ComponentFixture<PlanetLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
