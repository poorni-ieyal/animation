import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productFeatures } from 'src/interfaces/interface';
import { EachServicesComponent } from 'src/app/blocks/each-services/each-services.component';
import { ServicesHeaderComponent } from 'src/app/blocks/services-header/services-header.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServicesHeaderComponent,EachServicesComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
}