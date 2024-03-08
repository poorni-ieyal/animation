import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseModelComponent } from './franchise-model.component';

describe('FranchiseModelComponent', () => {
  let component: FranchiseModelComponent;
  let fixture: ComponentFixture<FranchiseModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FranchiseModelComponent]
    });
    fixture = TestBed.createComponent(FranchiseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
