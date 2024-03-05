import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productFeatures } from 'src/interfaces/interface';

@Component({
  selector: 'app-product-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.css'],
})
export class ProductIntroComponent {
  selectedIndex :number = 0;
  products: string[] = [
    'Water proofing',
    'Crack Filling',
    'Flooring Systems',
    'PU Injection',
    'Spalling Rectification',
  ];

  productFeatures: productFeatures[] = [
    {
      
      title:
        'Protect your property from moisture damage with our comprehensive waterproofing solutions',
      description:
        'Building doctor offer waterproofing products and services for Terrace, Bathroom, Water Tank, Dampness, Exterior Walls, Terrace Garden, and Interior Walls. Our experienced professionals can help you protect your property from water damage and ensure a healthy and comfortable living environment.',
    },
    {
      
      title:
        'Maintain the integrity of your structures with our professional crack filling services.',
      description:
        "Ensure the longevity and stability of your structures with Building Doctor's expert crack filling services. Our professional team is dedicated to maintaining the integrity of your buildings by addressing cracks effectively and efficiently. Trust us to provide reliable solutions that enhance the durability and safety of your property.",
    },
    {
      
      title:'Enhance durability and aesthetics with our high-quality flooring systems installation and repair.',
      description:'Transform your floors with Building Doctor\'s premium flooring systems. From durable coatings to seamless finishes, our solutions are designed to enhance the aesthetics, functionality, and longevity of your surfaces. Experience excellence with Building Doctor\'s flooring systems.'
    },
    {
   
      title:'Reinforce and stabilize building structures with precision PU injection services.',
      description:'Experience superior structural reinforcement with Building Doctor\'s PU injection services. Our advanced polyurethane injection techniques effectively repair and strengthen concrete structures, addressing cracks, voids, and leaks with precision. Trust our experienced professionals to restore the integrity of your buildings. '
    },
    {
     
      title:'Restore the appearance and strength of concrete surfaces with our effective spalling repair solutions.',
      description:'Repair and fortify your concrete structures with Building Doctor\'s spalling rectification services. Our skilled team utilizes cutting-edge methods to fix and revive surfaces damaged by spalling, ensuring long-lasting durability and structural stability. Count on us to rejuvenate your concrete structures effectively'
    }
  ];

  showContent(index : number){
    this.selectedIndex = index;
    console.log(this.selectedIndex);
  }
}
