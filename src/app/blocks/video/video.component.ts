import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  youtubeUrl:any= this.transform('https://www.youtube.com/embed/iB4n75bvxY4?autoplay=0&mute=1')

  constructor(private dom:DomSanitizer){}
  transform(value: string) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

  openVideo(){
    this.youtubeUrl = this.transform('https://www.youtube.com/embed/iB4n75bvxY4?autoplay=1&mute=1')
  }

  closeVideo(){
    this.youtubeUrl = this.transform('https://www.youtube.com/embed/iB4n75bvxY4?autoplay=0&mute=1')

  }
 
  }
 



  





