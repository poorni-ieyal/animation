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
        'Safeguard Your Concrete: Building Doctor Admixtures',
        subHeading:'Unlock superior concrete performance with Building Doctor\'s innovative admixture solutions. ',
      description:'Make your concrete stronger and longer lasting.',
        point1:'Pour and smooth concrete easier.',
        point2:'Say goodbye to cracks and water leaks.',
        point3:'Finish your projects faster.',
        point4 :'Get the confidence you deserve in your concrete'
    },

    {
      
      title:
        'Build Like Never Before: Building Doctor Bonding Agents',
        subHeading:'Unleash the full potential of your construction projects with Building Doctor\'s powerful bonding agents ',
      description: 'Superior adhesion for various building materials.',
        point1:'Flawless bonding between old & new surfaces.',
        point2:'Water-resistant for lasting protection.',
        point3:'Stronger, more reliable constructions for enduring results.',
        point4 :''
    },


    {
      
      title:
        'Banish Cracks, Restore Strength: Building Doctor Crack Fillers',
        subHeading:' Eradicate unsightly cracks and fortify your structures with Building Doctor\'s comprehensive solution. ',
      description:'   Eradicate Cracks, Restore Strength.',
        point1:'Effortless Application, Lasting Results.',
        point2:'Unmatched Versatility for All Surfaces.',
        point3:'Superior Strength & Protection.',
        point4 :'Uncompromising Aesthetics.'
    },


    {
      
      title:
        'Secure and Fortify: Building Doctor Grouts & Anchors',
        subHeading:'The unwavering foundation for lasting installations. ',
      description:'Stronger bonds, lasting results.',
        point1:'Secure and strong installations',
        point2:'Versatile for tiles, masonry & anchoring.',
        point3:'Superior Strength & Durability.',
        point4 :' Enjoy smooth application, easy cleaning, and a flawless finish.'
    },

    



  //   {
      
  //     title:
  //       'Maintain the integrity of your structures with our professional crack filling services.',
  //     description:
  //       "Ensure the longevity and stability of your structures with Building Doctor's expert crack filling services. Our professional team is dedicated to maintaining the integrity of your buildings by addressing cracks effectively and efficiently. Trust us to provide reliable solutions that enhance the durability and safety of your property.",
  //   },
  //   {
      
  //     title:'Enhance durability and aesthetics with our high-quality flooring systems installation and repair.',
  //     description:'Transform your floors with Building Doctor\'s premium flooring systems. From durable coatings to seamless finishes, our solutions are designed to enhance the aesthetics, functionality, and longevity of your surfaces. Experience excellence with Building Doctor\'s flooring systems.'
  //   },
  //   {
   
  //     title:'Reinforce and stabilize building structures with precision PU injection services.',
  //     description:'Experience superior structural reinforcement with Building Doctor\'s PU injection services. Our advanced polyurethane injection techniques effectively repair and strengthen concrete structures, addressing cracks, voids, and leaks with precision. Trust our experienced professionals to restore the integrity of your buildings. '
  //   },
  //   {
     
  //     title:'Restore the appearance and strength of concrete surfaces with our effective spalling repair solutions.',
  //     description:'Repair and fortify your concrete structures with Building Doctor\'s spalling rectification services. Our skilled team utilizes cutting-edge methods to fix and revive surfaces damaged by spalling, ensuring long-lasting durability and structural stability. Count on us to rejuvenate your concrete structures effectively'
  //   }
   ];

  // showContent(index : number){
  //   this.selectedIndex = index;
  //   console.log(this.selectedIndex);
  // }
}
