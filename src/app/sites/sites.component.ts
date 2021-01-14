import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive-service';

export interface Site_Cards {
  title: string;
  imageSrc: string;
  cols: number;
  rows: number;
}

@Component ({
  selector: 'sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})

export class SitesComponent implements OnInit {
  defaultElevation = 4;
  raisedElevation = 16;

  /***********************************************
  Logic for handling screen responsivness
  The "colNum" and "margin" variable values
  Are applied to the "mat-grid-list" html element
  ***********************************************/
  public colNum: number;
  public margin: string;
  public screenSize: string = this.responsiveService.screenWidth;

  constructor(private responsiveService: ResponsiveService) {
    this.colNum = 0;
    this.margin = '';
  }

  ngOnInit() {
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);
  }

  onResize(event: any){
    this.responsiveService.checkWidth();
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);
    this.siteCards.forEach(card => card.rows = this.setSiteCardCal(this.screenSize));
  }
  /*********************************
  End of screen responsiveness logic
  *********************************/

  siteCards: Site_Cards[] = [
    {
      title: 'Site One',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cols: 2,
      rows: this.setSiteCardCal(this.screenSize)
    },
    {
      title: 'Site Two',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cols: 2,
      rows: this.setSiteCardCal(this.screenSize)
    },
    {
      title: 'Site Three',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      cols: 2,
      rows: this.setSiteCardCal(this.screenSize)
    }
  ];

  setResponsiveAttrs(screenSize: string) {
    if(screenSize === 'lg') {
      this.colNum = 6;
      this.margin = "0 5em";
    }
    if(screenSize === 'md') {
      this.colNum = 4;
      this.margin = "0 1em";
    }
    if(screenSize === 'sm') {
      this.colNum = 2;
      this.margin = "0 1em";
    }
  }

  setSiteCardCal(screenSize: string) {
    if(screenSize === 'md' || screenSize === 'lg'){
      return 6;
    }
    else
      return 8;
  }
}
