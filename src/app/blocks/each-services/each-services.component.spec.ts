import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachServicesComponent } from './each-services.component';

describe('EachServicesComponent', () => {
  let component: EachServicesComponent;
  let fixture: ComponentFixture<EachServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EachServicesComponent]
    });
    fixture = TestBed.createComponent(EachServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
