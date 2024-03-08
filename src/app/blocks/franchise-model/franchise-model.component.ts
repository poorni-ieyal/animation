import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { franchise } from 'src/interfaces/interface';

@Component({
  selector: 'app-franchise-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './franchise-model.component.html',
  styleUrls: ['./franchise-model.component.css'],
})
export class FranchiseModelComponent {
  franchisee: franchise[] = [
    { 
      franchiseIcon: '../../../assets/icons/double-tick-icon.png',
      heading: 'Proven business model' ,
      description:
        'Well defined infrastructure planning, <br> Resources, and network partners in Place. All <br> you have to do is be dedicated towards <br> offering top-notch services to your customers.',
    },
    { 
      franchiseIcon: '../../../assets/icons/not-equal-icon.png',
      heading: 'No Royalty Charges' ,
      description:
  'As a pioneer in the industry, Building Doctor <br> is glad to offer you a royalty free franchisee. <br>  No hidden charges too!All we expect from <br> you is an unwavering commitment to <br> enhance the Business.'
    },
    { 
      franchiseIcon: '../../../assets/icons/double-tick-icon.png',
      heading: 'Exclusive Territory' ,
      description:
        'We are clear on offering exclusive <br> dealerships ; one taluk, one franchisee. You <br> get the exclusive rights to act as a network <br> partner, in that geographical area. This <br> enriches business growth.',
    },
    { 
      franchiseIcon: '../../../assets/icons/double-tick-icon.png',
      heading: 'Hands on support' ,
      description:
        'You are bound to get a steady stream of  <br> direct leads in your geographical area. <br> Additionally, we also offer Branding support  <br> to generate quality leads for you',
    },
    { 
      franchiseIcon: '../../../assets/icons/double-tick-icon.png',
      heading: 'High profit margin' ,
      description:
        'Be assured that you are entering into a <br> business that has stability and potential for <br> exponential growth year after year. So, you <br> will be able to enjoy long term benefits, good <br> returns and high profit margins.'
    },
    { 
      franchiseIcon: '../../../assets/icons/double-tick-icon.png',
      heading: 'No Stock Dumping' ,
      description:
        'Our one day order fulfillment promise <br> ensures that you can order single or multiple <br> parts on an adhoc basis and get it delivered <br> the next day.',
    },
    

    
    

  ];
}
