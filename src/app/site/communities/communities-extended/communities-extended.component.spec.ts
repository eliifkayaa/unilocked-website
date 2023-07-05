import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesExtendedComponent } from './communities-extended.component';

describe('CommunitiesExtendedComponent', () => {
  let component: CommunitiesExtendedComponent;
  let fixture: ComponentFixture<CommunitiesExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitiesExtendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunitiesExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
