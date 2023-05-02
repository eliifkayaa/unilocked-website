import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCommunitiesComponent } from './search-communities.component';

describe('SearchCommunitiesComponent', () => {
  let component: SearchCommunitiesComponent;
  let fixture: ComponentFixture<SearchCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCommunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
