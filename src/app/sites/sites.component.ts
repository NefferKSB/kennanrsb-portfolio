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
  colNum: number | undefined;
  rowHeight: string | undefined;
  margin: string | undefined;

  constructor() {}

  ngOnInit() {
    this.colNum = (window.innerWidth <= 400) ? 1 : 3
    this.rowHeight = (window.innerWidth <= 400) ? "28em" : "32em"
    this.margin = (window.innerWidth <= 400) ? "0 1em" : "0 5em"
  }

  onResize(event: any) {
    this.colNum = (event.target.innerWidth <= 400) ? 1 : 3;
    this.rowHeight = (event.target.innerWidth <= 400) ? "20em" : "32em";
    this.margin = (window.innerWidth <= 400) ? "0 1em" : "0 5em"
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
