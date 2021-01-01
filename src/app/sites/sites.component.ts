import { Component, OnInit } from '@angular/core';

export interface Site_Cards {
  title: string;
  imageSrc: string;
  cols: number;
  rows: any;
}

@Component ({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})

export class SitesComponent implements OnInit {

  /***********************************************
  Logic for handling screen responsivness
  The "colNum" and "margin" variable values
  Are applied to the "mat-grid-list" html element
  ***********************************************/
  public colNum: number;
  public margin: string;
  public screenWidth = window.innerWidth;

  constructor() {
    this.colNum = 0;
    this.margin ='';
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.setResponsiveAttrs(this.screenWidth);
  }

  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.setResponsiveAttrs(this.screenWidth);
    this.siteCards.forEach(card => card.rows = this.setSiteCardCal(this.screenWidth));
  }
  /*********************************
  End of screen responsiveness logic
  *********************************/

  siteCards: Site_Cards[] = [
    {
      title: 'Site One',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cols: 2,
      rows: this.setSiteCardCal(this.screenWidth)
    },
    {
      title: 'Site Two',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cols: 2,
      rows: this.setSiteCardCal(this.screenWidth)
    },
    {
      title: 'Site Three',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cols: 2,
      rows: this.setSiteCardCal(this.screenWidth)
    }
  ];

  setResponsiveAttrs(screenWidth: number) {
    if(screenWidth > 700) {
      this.colNum = 6;
      this.margin = "0 5em";
    }
    if(screenWidth <= 700) {
      this.colNum = 4;
      this.margin = "0 1em";
    }
    if(screenWidth <= 400) {
      this.colNum = 2;
      this.margin = "0 1em";
    }
  }

  setSiteCardCal(screenWidth: number) {
    if(screenWidth <= 400){
      return 6;
    }
    else
      return 8;
  }
}
