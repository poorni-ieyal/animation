import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/blocks/banner/banner.component';
import { VideoComponent } from 'src/app/blocks/video/video.component';
import { CalculateComponent } from 'src/app/blocks/calculate/calculate.component';
import { BillComponent } from 'src/app/blocks/bill/bill.component';
import { VideoPlayerComponent } from 'src/app/blocks/video-player/video-player.component';
import { SliderComponent } from 'src/app/blocks/slider/slider.component';

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
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
