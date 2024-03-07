import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-franchise-section',
  standalone: true,
  imports: [CommonModule,SwiperModule],
  templateUrl: './franchise-section.component.html',
  styleUrls: ['./franchise-section.component.css']
})
export class FranchiseSectionComponent {
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
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      425: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },

      1440: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
    },
  };

}
