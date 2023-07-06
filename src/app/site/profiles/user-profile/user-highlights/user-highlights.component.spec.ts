import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHighlightsComponent } from './user-highlights.component';

describe('UserHighlightsComponent', () => {
  let component: UserHighlightsComponent;
  let fixture: ComponentFixture<UserHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
