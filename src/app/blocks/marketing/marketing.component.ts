import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { adMarketing } from 'src/interfaces/interface';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [CommonModule,SwiperModule],
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent {


  config: SwiperOptions = {
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: false,
    pagination: false,
    scrollbar: false,
    loop: true,
    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      425: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },

      1440: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
    },
  };

  ads:adMarketing[]=[
   

    {
      adImage:'../../../assets/images/train-promotion.png',
      title:'Train Promotion',
      alt:'Train Promotion'
    },
    {
      adImage:'../../../assets/images/television-promotion.png',
      title:'Television Promotions',
      alt:'Television Promotions'
    },
    {
    adImage:'../../../assets/images/auto-marketing.png',
    title:'Auto Promotions',
    alt:'Auto Promotions'
  },
  
 
]
}



