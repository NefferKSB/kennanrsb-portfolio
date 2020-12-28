import { Component } from '@angular/core';

export interface Site_Cards {
  title: string;
  subTitle: string;
  imageSrc: string;
  altText: string;
  paragraphText: string;
  btnOneText: string;
  btnTwoText: string;
}

@Component ({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  siteCards: Site_Cards[] = [
    {
      title: 'Shiba Inu',
      subTitle: 'Dog Breed',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      altText: 'Photo of a Shiba Inu',
      paragraphText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      btnOneText: 'LIKE',
      btnTwoText: 'SHARE'
    }
  ];
}
