import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFromFriendsComponent } from './projects-from-friends.component';

describe('ProjectsFromFriendsComponent', () => {
  let component: ProjectsFromFriendsComponent;
  let fixture: ComponentFixture<ProjectsFromFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsFromFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsFromFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
