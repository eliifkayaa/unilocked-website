import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryPopularsComponent } from './discovery-populars.component';

describe('DiscoveryPopularsComponent', () => {
  let component: DiscoveryPopularsComponent;
  let fixture: ComponentFixture<DiscoveryPopularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryPopularsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveryPopularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
