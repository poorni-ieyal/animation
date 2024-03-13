import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-return-and-refund',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './return-and-refund.component.html',
  styleUrls: ['./return-and-refund.component.css']
})
export class ReturnAndRefundComponent {
  ngOnInit() {
    
    window.scroll(0, 0);
  
}
}
