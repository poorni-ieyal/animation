import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/blocks/banner/banner.component';
import { VideoComponent } from 'src/app/blocks/video/video.component';
import { CalculateComponent } from 'src/app/blocks/calculate/calculate.component';
import { BillComponent } from 'src/app/blocks/bill/bill.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,BannerComponent,VideoComponent,CalculateComponent,BillComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
