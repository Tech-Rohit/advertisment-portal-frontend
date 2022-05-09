import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRegistrationFormComponent } from './ad-registration-form.component';

describe('AdRegistrationFormComponent', () => {
  let component: AdRegistrationFormComponent;
  let fixture: ComponentFixture<AdRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
