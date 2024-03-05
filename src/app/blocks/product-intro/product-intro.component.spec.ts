import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIntroComponent } from './product-intro.component';

describe('ProductIntroComponent', () => {
  let component: ProductIntroComponent;
  let fixture: ComponentFixture<ProductIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductIntroComponent]
    });
    fixture = TestBed.createComponent(ProductIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
