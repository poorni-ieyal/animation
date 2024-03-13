import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-new-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-banner.component.html',
  styleUrls: ['./new-banner.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})


export class NewBannerComponent {
  textStrings: string[] = [
    "No more Leaks",
    "No more Cracks",
    "No more headaches",
    "Just peace of mind"
  ];

  ngOnInit() {
    // Display each text string one by one
    this.displayTextStrings();
  }
  displayTextStrings(){
    let currentIndex = 0;

    setInterval(() => {
      // Show the current text string
      this.showText(currentIndex);
  
      // Move to the next text string
      currentIndex = (currentIndex + 1) % this.textStrings.length;
    }, 800); // Adjust the interval as needed
  }

  showText(index: number) {
    // Hide all text strings
    document.querySelectorAll('.text').forEach(element => {
      element.classList.remove('show');
    });
    // Show the text string at the specified index
    document.querySelectorAll('.text')[index]?.classList.add('show');
  }
}

