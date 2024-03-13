import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBannerComponent } from './new-banner.component';

describe('NewBannerComponent', () => {
  let component: NewBannerComponent;
  let fixture: ComponentFixture<NewBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NewBannerComponent]
    });
    fixture = TestBed.createComponent(NewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
