import { Component, OnInit } from '@angular/core';

export interface Site_Cards {
  title: string;
  imageSrc: string;
  btnOneText: string;
  btnTwoText: string;
}

@Component ({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  breakpoint: number | undefined;
  constructor() {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  siteCards: Site_Cards[] = [
    {
      title: 'Site One',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      btnOneText: 'LIKE',
      btnTwoText: 'SHARE'
    },
    {
      title: 'Site Two',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      btnOneText: 'LIKE',
      btnTwoText: 'SHARE'
    },
    {
      title: 'Site Three',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      btnOneText: 'LIKE',
      btnTwoText: 'SHARE'
    }
  ];
}
