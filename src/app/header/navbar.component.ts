import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component ({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;

  constructor(
    private viewportScroller: ViewportScroller
  ) {}

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 116 ? (this.isScrolled = true) : (this.isScrolled = false);
  }

  public scrollToElementId(elementId: string): void {
    this.viewportScroller.setOffset([0, 70]);
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
