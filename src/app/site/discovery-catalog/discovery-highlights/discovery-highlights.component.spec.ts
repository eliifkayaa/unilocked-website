import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryHighlightsComponent } from './discovery-highlights.component';

describe('DiscoveryHighlightsComponent', () => {
  let component: DiscoveryHighlightsComponent;
  let fixture: ComponentFixture<DiscoveryHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryHighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveryHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
