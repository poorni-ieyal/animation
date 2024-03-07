import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { testimonials } from 'src/interfaces/interface';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
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
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },

      1440: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
    },
  };

  testimonials: testimonials[] = [
    {
      profileImg: '../../../assets/images/testimonial-img.png',
      testimonialIcon: '../../../assets/icons/testimonial-icons.png',
      feedback:'Good products and Good <br> services.They finished my <br> crack leakage problem on time <br> with low cost. Thank you <br> so much building doctor.',
      name: '- Suruthi',
      rating: '../../../assets/icons/star-icon.png',
    },
    {
      profileImg: '../../../assets/images/testimonial-img.png',
      testimonialIcon: '../../../assets/icons/testimonial-icons.png',
      feedback:'Good products and Good <br> services.They finished my <br> crack leakage problem on time <br> with low cost. Thank you <br> so much building doctor ..',
      name: '- Suruthi',
      rating: '../../../assets/icons/star-icon.png',
    },
    {
      profileImg: '../../../assets/images/testimonial-img.png',
      testimonialIcon: '../../../assets/icons/testimonial-icons.png',
      feedback:'Good products and Good <br> services.They finished my <br> crack leakage problem on time <br> with low cost. Thank you <br> so much building doctor ..',
      name: '- Suruthi',
      rating: '../../../assets/icons/star-icon.png',
    },
  ];
}
