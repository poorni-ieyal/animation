import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/blocks/banner/banner.component';
import { VideoComponent } from 'src/app/blocks/video/video.component';
import { SliderComponent } from 'src/app/blocks/slider/slider.component';
import { ProductIntroComponent } from 'src/app/blocks/product-intro/product-intro.component';
import { MobileAppComponent } from 'src/app/blocks/mobile-app/mobile-app.component';
import { FaqComponent } from 'src/app/blocks/faq/faq.component';
import { ViewProductsComponent } from 'src/app/blocks/view-products/view-products.component';
import { FeatureComponent } from 'src/app/blocks/feature/feature.component';
import { BusinessArticleComponent } from 'src/app/blocks/business-article/business-article.component';
import { TestimonialsComponent } from 'src/app/blocks/testimonials/testimonials.component';
import { FranchiseSectionComponent } from 'src/app/blocks/franchise-section/franchise-section.component';
import { CommunityComponent } from 'src/app/blocks/community/community.component';
import { NewBannerComponent } from 'src/app/blocks/new-banner/new-banner.component';
import { SpecialitiesComponent } from 'src/app/blocks/specialities/specialities.component';
import { BlogComponent } from 'src/app/blocks/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NewBannerComponent,
    SpecialitiesComponent,
    SliderComponent,
    VideoComponent,
    ProductIntroComponent,
    ViewProductsComponent,
    MobileAppComponent,
    FeatureComponent,
    BusinessArticleComponent,
    TestimonialsComponent,
    FranchiseSectionComponent,
    BlogComponent,
    FaqComponent,
    CommunityComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit() {
    
    window.scroll(0, 0);
  
}
}
