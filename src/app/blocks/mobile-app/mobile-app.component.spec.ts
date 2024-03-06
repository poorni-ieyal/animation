import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppComponent } from './mobile-app.component';

describe('MobileAppComponent', () => {
  let component: MobileAppComponent;
  let fixture: ComponentFixture<MobileAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MobileAppComponent]
    });
    fixture = TestBed.createComponent(MobileAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
