import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleExtendedComponent } from './people-extended.component';

describe('PeopleExtendedComponent', () => {
  let component: PeopleExtendedComponent;
  let fixture: ComponentFixture<PeopleExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleExtendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
