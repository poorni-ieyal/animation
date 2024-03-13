import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFranschiseComponent } from './support-franschise.component';

describe('SupportFranschiseComponent', () => {
  let component: SupportFranschiseComponent;
  let fixture: ComponentFixture<SupportFranschiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SupportFranschiseComponent]
    });
    fixture = TestBed.createComponent(SupportFranschiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
