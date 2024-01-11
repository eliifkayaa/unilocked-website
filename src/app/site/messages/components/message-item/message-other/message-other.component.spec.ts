import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOtherComponent } from './message-other.component';

describe('MessageOtherComponent', () => {
  let component: MessageOtherComponent;
  let fixture: ComponentFixture<MessageOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
