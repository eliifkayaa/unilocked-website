import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsExtendedComponent } from './projects-extended.component';

describe('ProjectsExtendedComponent', () => {
  let component: ProjectsExtendedComponent;
  let fixture: ComponentFixture<ProjectsExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsExtendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
