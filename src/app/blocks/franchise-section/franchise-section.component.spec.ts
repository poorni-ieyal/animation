import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseSectionComponent } from './franchise-section.component';

describe('FranchiseSectionComponent', () => {
  let component: FranchiseSectionComponent;
  let fixture: ComponentFixture<FranchiseSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FranchiseSectionComponent]
    });
    fixture = TestBed.createComponent(FranchiseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
