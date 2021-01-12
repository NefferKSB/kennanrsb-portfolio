import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../responsive-service';

@Component ({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public fontSize: string;
  public textSectionDisplay: string;
  public iconSectionDisplay: string;
  public sectionItemsWidth: string;
  public screenSize: string = this.responsiveService.screenWidth;

  constructor(private responsiveService: ResponsiveService) {
    this.fontSize = "13.5px";
    this.textSectionDisplay = "inline-block";
    this.iconSectionDisplay = "inline-block";
    this.sectionItemsWidth = "50%";
  }

  ngOnInit() {
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);
  }

  onResize(event: any){
    this.responsiveService.checkWidth();
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);
  }

  setResponsiveAttrs(screenSize: string) {
    if(screenSize === 'lg') {
      this.fontSize = "13.5px";
      this.textSectionDisplay = "inline-block";
      this.iconSectionDisplay = "inline-block";
      this.sectionItemsWidth = "50%";
    }
    if(screenSize === 'md') {
      this.fontSize = "13.5px";
      this.textSectionDisplay = "inline-block";
      this.iconSectionDisplay = "inline-block";
      this.sectionItemsWidth = "50%";
    }
    if(screenSize === 'sm') {
      this.fontSize = "13.5px";
      this.textSectionDisplay = "block";
      this.iconSectionDisplay = "block";
      this.sectionItemsWidth = "100%";
    }
  }
}
