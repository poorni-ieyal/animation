import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/config/header/header.component';
import { FranchiseApplyComponent } from 'src/app/blocks/franchise-apply/franchise-apply.component';
import { VideoComponent } from 'src/app/blocks/video/video.component';
import { FranchiseModelComponent } from 'src/app/blocks/franchise-model/franchise-model.component';
import { FaqComponent } from 'src/app/blocks/faq/faq.component';
import { FranchiseSectionComponent } from 'src/app/blocks/franchise-section/franchise-section.component';
import { MarketingComponent } from 'src/app/blocks/marketing/marketing.component';
import { adMarketing } from 'src/interfaces/interface';
import { SupportFranschiseComponent } from 'src/app/blocks/support-franschise/support-franschise.component';
import { SupportComponent } from 'src/app/blocks/support/support.component';
import { TrainingComponent } from 'src/app/blocks/training/training.component';

@Component({
  selector: 'app-franchise',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FranchiseApplyComponent,
    VideoComponent,
    FranchiseModelComponent,
    MarketingComponent,
    FaqComponent,
    FranchiseSectionComponent,
    SupportFranschiseComponent,
    SupportComponent,
    TrainingComponent
  ],
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css'],
})
export class FranchiseComponent {
  support:adMarketing[]=[
    
    {
      adImage:'../../../assets/images/train-promotion.png',
      title:'Train Promotion',
      alt:'Train Promotion'
    },
    {
      adImage:'../../../assets/images/television-promotion.png',
      title:'Television Promotions',
      alt:'Television Promotions'
    },
    {
    adImage:'../../../assets/images/auto-marketing.png',
    title:'Auto Promotions',
    alt:'Auto Promotions'
  },
  
  ]
  ngOnInit() {
    
    window.scroll(0, 0);
  
}
}
