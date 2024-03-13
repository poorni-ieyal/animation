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
      franchiseIcon: '../../../assets/images/proven-business-model.png',
      heading: 'Proven business model' ,
      description:
        'Well defined infrastructure planning, <br> Resources, and network partners in <br> Place. All you have to do is be <br> dedicated towards offering top-notch <br> services to your customers.',
    },
    { 
      franchiseIcon: '../../../assets/images/no-royalty-charges.png',
      heading: 'No Royalty Charges' ,
      description:
  'As a pioneer in the industry, Building Doctor <br> is glad to offer you a royalty free franchisee. <br>  No hidden charges too!All we expect from <br> you is an unwavering commitment to <br> enhance the Business.'
    },
    { 
      franchiseIcon: '../../../assets/images/exclusive-territory.png',
      heading: 'Exclusive Territory' ,
      description:
        'We are clear on offering exclusive <br> dealerships ; one taluk, one franchisee. <br> You get the exclusive rights to act as a <br> network partner, in that geographical <br> area. This enriches business growth.',
    },
    { 
      franchiseIcon: '../../../assets/images/hands-on-support.png',
      heading: 'Hands on support' ,
      description:
        'You are bound to get a steady stream <br> of  direct leads in your geographical <br> area. Additionally, we also offer <br> Branding support to generate quality <br> leads for you',
    },
    { 
      franchiseIcon: '../../../assets/images/high-profit-margin.png',
      heading: 'High profit margin' ,
      description:
        'You are entering into a business that <br> has stability and potential for <br> exponential growth year after year. So, <br> you will be able to enjoy long term <br> benefits & high profit margins.'
    },
    { 
      franchiseIcon: '../../../assets/images/no-stock-dumping.png',
      heading: 'No Stock Dumping' ,
      description:
        'Our one day order fulfillment promise <br> ensures that you can order single or <br> multiple parts on an adhoc basis and <br get it delivered > the next day.',
    },
    { 
      franchiseIcon: '../../../assets/images/no-monthly-targets.png',
      heading: 'No Monthly Targets' ,
      description:
        'We strongly Believe in Organic <br> marketing and Services.So we do not <br> impose any Monthly parts <br> procurement ,service or sales Target. <br> So you can work on development.',
    },
    { 
      franchiseIcon: '../../../assets/images/transparent-pricing.png',
      heading: 'Transparent pricing' ,
      description:
        'We offer Transparent and <br> standardised pricing to all our <br> franchises regardless of Order levels. <br> Keeping Our product affordable and <br> top notch Quality.',
    },

  ];

  mobileads:any = [
    { 
      franchiseIcon: '../../../assets/images/proven-business-model.png',
      heading: 'Proven business model' ,
      description:
        'Well defined infrastructure planning, Resources, and network partners in Place. All you have to do is be dedicated towards offering top-notch services to your customers.',
    },
    { 
      franchiseIcon: '../../../assets/images/no-royalty-charges.png',
      heading: 'No Royalty Charges' ,
      description:
  'As a pioneer in the industry, Building Doctor is glad to offer you a royalty free franchisee.  No hidden charges too!All we expect from you is an unwavering commitment to enhance the Business.'
    },
    { 
      franchiseIcon: '../../../assets/images/exclusive-territory.png',
      heading: 'Exclusive Territory' ,
      description:
        'We are clear on offering exclusive dealerships ; one taluk, one franchisee. You get the exclusive rights to act as a network partner, in that geographical area. This enriches business growth.',
    },
    { 
      franchiseIcon: '../../../assets/images/hands-on-support.png',
      heading: 'Hands on support' ,
      description:
        'You are bound to get a steady stream of  direct leads in your geographical area. Additionally, we also offer Branding support to generate quality leads for you',
    },
    { 
      franchiseIcon: '../../../assets/images/high-profit-margin.png',
      heading: 'High profit margin' ,
      description:
        'You are entering into a business that has stability and potential for exponential growth year after year. So, you will be able to enjoy long term benefits & high profit margins.'
    },
    { 
      franchiseIcon: '../../../assets/images/no-stock-dumping.png',
      heading: 'No Stock Dumping' ,
      description:
        'Our one day order fulfillment promise ensures that you can order single or multiple parts on an adhoc basis and <br get it delivered > the next day.',
    },
    { 
      franchiseIcon: '../../../assets/images/no-monthly-targets.png',
      heading: 'No Monthly Targets' ,
      description:
        'We strongly Believe in Organic marketing and Services.So we do not impose any Monthly parts procurement ,service or sales Target. So you can work on development.',
    },
    { 
      franchiseIcon: '../../../assets/images/transparent-pricing.png',
      heading: 'Transparent pricing' ,
      description:
        'We offer Transparent and standardised pricing to all our franchises regardless of Order levels. Keeping Our product affordable and top notch Quality.',
    },

  ];

}
