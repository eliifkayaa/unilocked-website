import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleStudentsComponent } from './people-students.component';

describe('PeopleStudentsComponent', () => {
  let component: PeopleStudentsComponent;
  let fixture: ComponentFixture<PeopleStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
