import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specialities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent {

  slides: any = [
    { count: './assets/icons/years.png', text: '10+ Years of <br> Excellence' },
    { count: './assets/icons/outlets.png', text: '30+ Outlets' },
    { count: '/assets/icons/services.png', text: '75+ Services' },
    { count: '/assets/icons/products.png', text: '85+ Products' },
    { count: '/assets/icons/applicatiors.png', text: '200+ Applicators' },
    { count: '/assets/icons/projects.png', text: '1000+ Projects' },
    { count: '/assets/icons/happy-customers.png', text: '10000+ Happy <br> Customers' },
    { count: '/assets/icons/sq.ft.png', text: '1M+ Sq.ft <br> Protected' },
    
  ];

}


