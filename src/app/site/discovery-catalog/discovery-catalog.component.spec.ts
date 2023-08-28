import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryCatalogComponent } from './discovery-catalog.component';

describe('DiscoveryCatalogComponent', () => {
  let component: DiscoveryCatalogComponent;
  let fixture: ComponentFixture<DiscoveryCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveryCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
