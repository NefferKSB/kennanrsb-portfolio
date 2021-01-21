import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../services/responsive-service';

@Component ({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public fontSize: string;
  public screenSize: string = this.responsiveService.screenWidth;

  constructor(private responsiveService: ResponsiveService) {
    this.fontSize = "10px";
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
      this.fontSize = "10px";
    }
    if(screenSize === 'md') {
      this.fontSize = "10px";
    }
    if(screenSize === 'sm') {
      this.fontSize = "10px";
    }
  }
}
