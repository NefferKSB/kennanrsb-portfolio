import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component ({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOffset: number;
  isLargeScreen!: boolean;
  screenWidth!: number;

  constructor(
    private viewportScroller: ViewportScroller
  ) {
    this.menuOffset = 115;
  }

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 116 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth > 700) {

      this.isLargeScreen = true
    } else if(this.screenWidth < 700) {
      this.isLargeScreen = false;
    }
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth > 700) {
      this.isLargeScreen = true
    } else if(this.screenWidth < 700) {
      this.isLargeScreen = false;
    }
  }

  public scrollToElementId(elementId: string): void {
    this.viewportScroller.setOffset([0, 70]);
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
