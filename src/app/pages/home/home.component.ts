import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/blocks/banner/banner.component';
import { VideoComponent } from 'src/app/blocks/video/video.component';
import { CalculateComponent } from 'src/app/blocks/calculate/calculate.component';
import { BillComponent } from 'src/app/blocks/bill/bill.component';
import { VideoPlayerComponent } from 'src/app/blocks/video-player/video-player.component';
import { SliderComponent } from 'src/app/blocks/slider/slider.component';
import { ProductIntroComponent } from 'src/app/blocks/product-intro/product-intro.component';
import { MobileAppComponent } from 'src/app/blocks/mobile-app/mobile-app.component';
import { FaqComponent } from 'src/app/blocks/faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    SliderComponent,
    VideoComponent,
    CalculateComponent,
    BillComponent,
    VideoPlayerComponent,
    ProductIntroComponent,
    MobileAppComponent,
    FaqComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
