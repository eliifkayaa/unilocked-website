import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesInformationComponent } from './messages-information.component';

describe('MessagesInformationComponent', () => {
  let component: MessagesInformationComponent;
  let fixture: ComponentFixture<MessagesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
