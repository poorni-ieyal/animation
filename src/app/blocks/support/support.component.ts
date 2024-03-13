import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adMarketing } from 'src/interfaces/interface';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule,SwiperModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

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
      title:'Digital Marketing',
      alt:'Digital Marketing'
    },
    {
      adImage:'../../../assets/images/television-promotion.png',
      title:'Graphic Desigining',
      alt:'Graphic Desigining'
    },
    {
    adImage:'../../../assets/images/auto-marketing.png',
    title:'Hassle Free Process Support',
    alt:'Hassle Free Process Support'
  },
  
 
]
}
