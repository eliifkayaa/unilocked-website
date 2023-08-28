import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPostCardComponent } from './project-post-card.component';

describe('ProjectPostCardComponent', () => {
  let component: ProjectPostCardComponent;
  let fixture: ComponentFixture<ProjectPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPostCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
