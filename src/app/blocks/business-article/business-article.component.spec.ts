import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessArticleComponent } from './business-article.component';

describe('BusinessArticleComponent', () => {
  let component: BusinessArticleComponent;
  let fixture: ComponentFixture<BusinessArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BusinessArticleComponent]
    });
    fixture = TestBed.createComponent(BusinessArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
