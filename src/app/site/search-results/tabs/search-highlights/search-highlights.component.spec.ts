import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHighlightsComponent } from './search-highlights.component';

describe('SearchHighlightsComponent', () => {
  let component: SearchHighlightsComponent;
  let fixture: ComponentFixture<SearchHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
