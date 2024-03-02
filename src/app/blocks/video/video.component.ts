import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
 

  onWindowScroll() {
    const threshold = 200; // Example threshold for changing background color
    if (window.pageYOffset > threshold) {
      // Change background color when scrolled past threshold
      document.body.style.backgroundColor = 'black';
      document.documentElement.style.setProperty(
        "--text-color",
        "#fff"
      );
    } else {
      // Revert to original background color when not scrolled past threshold
      document.body.style.backgroundColor = 'white';
      document.documentElement.style.setProperty(
        "--text-color",
        "#000"
      );
    }
  }

  playVideo(){
    const youtubeLink = 'https://www.youtube.com/watch?v=H77P44Ki6QY&t=4s';
    window.open(youtubeLink);

  }
}



