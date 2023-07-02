import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesExtendedComponent } from './companies-extended.component';

describe('CompaniesExtendedComponent', () => {
  let component: CompaniesExtendedComponent;
  let fixture: ComponentFixture<CompaniesExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesExtendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
