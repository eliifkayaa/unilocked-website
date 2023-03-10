import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFromCommunitiesComponent } from './projects-from-communities.component';

describe('ProjectsFromCommunitiesComponent', () => {
  let component: ProjectsFromCommunitiesComponent;
  let fixture: ComponentFixture<ProjectsFromCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsFromCommunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsFromCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
