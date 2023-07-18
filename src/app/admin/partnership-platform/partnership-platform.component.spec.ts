import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipPlatformComponent } from './partnership-platform.component';

describe('PartnershipPlatformComponent', () => {
  let component: PartnershipPlatformComponent;
  let fixture: ComponentFixture<PartnershipPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershipPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
