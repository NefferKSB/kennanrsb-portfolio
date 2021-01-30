import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../services/responsive-service';

@Component ({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fontSize: string;
  marginTop: string;
  screenSize: string = this.responsiveService.screenWidth;

  constructor(private responsiveService: ResponsiveService) {
    this.fontSize = "1.2em";
    this.marginTop = "";
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
      this.fontSize = "1.3em";
      this.marginTop = "";
    }
    if(screenSize === 'md') {
      this.fontSize = "1.2em";
      this.marginTop = "40px";
    }
    if(screenSize === 'sm') {
      this.fontSize = "1.1em";
      this.marginTop = "40px";
    }
  }
}
