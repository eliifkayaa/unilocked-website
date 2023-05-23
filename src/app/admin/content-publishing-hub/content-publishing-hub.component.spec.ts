import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPublishingHubComponent } from './content-publishing-hub.component';

describe('ContentPublishingHubComponent', () => {
  let component: ContentPublishingHubComponent;
  let fixture: ComponentFixture<ContentPublishingHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPublishingHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPublishingHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
