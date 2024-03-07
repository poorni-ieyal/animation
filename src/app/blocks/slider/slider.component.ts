import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import Swiper, { SwiperOptions } from 'swiper';
// import swiperCore, { Autoplay, SwiperOptions } from 'swiper';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  // animations: [
  //   trigger('marquee', [
  //     transition(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('10s linear', style({ transform: 'translateX(-100%)' })),
  //     ]),
  //   ]),
  // ],
})
export class SliderComponent implements OnInit {
  swiper?: Swiper;
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

 
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  slides: any = [
    { count: '10K+', text: 'Years of <br> Excellence' },

    { count: '1K+', text: 'Projects' },
    { count: '1L+', text: 'Happy <br> Customers' },
    { count: '10L+', text: 'Sq.ft <br> rescued' },
    { count: '85+', text: 'Products' },
    { count: '75+', text: 'Services' },
    { count: '30+', text: 'Outlets' },
    { count: '200+', text: 'Applications' },
  ];

  // onSwiper([swiper]) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }
}
