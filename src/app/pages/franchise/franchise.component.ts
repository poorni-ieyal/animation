import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/config/header/header.component';
import { FranchiseApplyComponent } from 'src/app/blocks/franchise-apply/franchise-apply.component';
import { VideoComponent } from 'src/app/blocks/video/video.component';
import { FranchiseModelComponent } from 'src/app/blocks/franchise-model/franchise-model.component';
import { FaqComponent } from 'src/app/blocks/faq/faq.component';
import { FranchiseSectionComponent } from 'src/app/blocks/franchise-section/franchise-section.component';

@Component({
  selector: 'app-franchise',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FranchiseApplyComponent,
    VideoComponent,
    FranchiseModelComponent,
    FaqComponent,
    FranchiseSectionComponent
  ],
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css'],
})
export class FranchiseComponent {}
