import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './config/header/header.component';
import { FooterComponent } from './config/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,HomeComponent, SwiperModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Building doctor';
}
