import { Component, OnInit } from '@angular/core';

export interface Site_Cards {
  title: string;
  imageSrc: string;
}

@Component ({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  public colNum: number;
  public rowHeight: string;
  public margin: string;

  constructor() {
    this.colNum = 0;
    this.rowHeight = '';
    this.margin ='';
  }

  ngOnInit() {
    const screenWidth = window.innerWidth;

    if(screenWidth > 700) {
      this.colNum = 3;
      this.rowHeight = "20em";
      this.margin = "0 5em";
    }
    if(screenWidth <= 700) {
      this.colNum = 2;
      this.rowHeight = "20em";
      this.margin = "0 1em";
    }
    if(screenWidth <= 400) {
      this.colNum = 1;
      this.rowHeight = "20em";
      this.margin = "0 1em";
    }
  }

  onResize(event: any) {
    const screenWidth = event.target.innerWidth;

    if(screenWidth > 700) {
      this.colNum = 3;
      this.rowHeight = "20em";
      this.margin = "0 5em";
    }
    if(screenWidth <= 700) {
      this.colNum = 2;
      this.rowHeight = "20em";
      this.margin = "0 1em";
    }
    if(screenWidth <= 400) {
      this.colNum = 1;
      this.rowHeight = "20em";
      this.margin = "0 1em";
    }
  }

  siteCards: Site_Cards[] = [
    {
      title: 'Site One',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Site Two',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Site Three',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    }
  ];
}
