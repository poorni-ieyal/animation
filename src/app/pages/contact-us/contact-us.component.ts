import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from 'src/app/blocks/community/community.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, CommunityComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  ngOnInit() {
    
    window.scroll(0, 0);
  
}
}
