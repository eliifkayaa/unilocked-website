import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryTopnotesComponent } from './discovery-topnotes.component';

describe('DiscoveryTopnotesComponent', () => {
  let component: DiscoveryTopnotesComponent;
  let fixture: ComponentFixture<DiscoveryTopnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryTopnotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveryTopnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
