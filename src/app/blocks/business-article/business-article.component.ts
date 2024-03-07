import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { yourStory } from 'src/interfaces/interface';
import { SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-business-article',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './business-article.component.html',
  styleUrls: ['./business-article.component.css'],
})
export class BusinessArticleComponent {
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
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 3.1,
        spaceBetween: 20,
      },

      1440: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
    },
  };

  stories: yourStory[] = [
    {
      img: '../../../assets/icons/your-story.png',
      content:
        'ரூ.10 கோடி <br> விற்பனையை <br> எட்டியது எப்படி <br> <strong>- ‘பில்டிங் <br>  டாக்டர்’</strong> ஆதன் <br> யோகியின் <br> பிசினஸ் கதை! ',
      read: 'Read the Article',
      icon: '../../../assets/icons/arrow-icon.png',
    },

    {
      img: '../../../assets/icons/your-story.png',
      content:
        'ரூ.10 கோடி <br> விற்பனையை <br> எட்டியது எப்படி <br> <strong>- ‘பில்டிங் <br>  டாக்டர்’</strong> ஆதன் <br> யோகியின் <br> பிசினஸ் கதை! ',
      read: 'Read the Article',
      icon: '../../../assets/icons/arrow-icon.png',
    },

    {
      img: '../../../assets/icons/your-story.png',
      content:
        'ரூ.10 கோடி <br> விற்பனையை <br> எட்டியது எப்படி <br> <strong>- ‘பில்டிங் <br>  டாக்டர்’</strong> ஆதன் <br> யோகியின் <br> பிசினஸ் கதை! ',
      read: 'Read the Article',
      icon: '../../../assets/icons/arrow-icon.png',
    },

    {
      img: '../../../assets/icons/your-story.png',
      content:
        'ரூ.10 கோடி <br> விற்பனையை <br> எட்டியது எப்படி <br> <strong>- ‘பில்டிங் <br>  டாக்டர்’</strong> ஆதன் <br> யோகியின் <br> பிசினஸ் கதை! ',
      read: 'Read the Article',
      icon: '../../../assets/icons/arrow-icon.png',
    },
  ];
}
