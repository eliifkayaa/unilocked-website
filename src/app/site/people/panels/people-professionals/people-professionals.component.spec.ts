import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleProfessionalsComponent } from './people-professionals.component';

describe('PeopleProfessionalsComponent', () => {
  let component: PeopleProfessionalsComponent;
  let fixture: ComponentFixture<PeopleProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleProfessionalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
