import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WindowScrollService } from '../services/window-scroll-service';
import { SelectorObject } from "../models/selector-object-model";

@Component ({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobile: Observable<boolean> | undefined;
  selectorObjs = [
    { selector: '.nav-menu', scrollClass: 'nav-menu-scroll'},
    { selector: '.div-spacer', scrollClass: 'div-spacer-scroll'}
  ];
  selectorObjArray: SelectorObject[] = this.selectorObjs;
  matToolbarHeight: number = 0;

  constructor(
    public windowScrollService: WindowScrollService,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver
      .observe(['(max-width: 950px)'])
      .pipe(map(({ matches }) => matches));
  }

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 116 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}
