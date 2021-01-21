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
  isMobile: Observable<boolean> | undefined;
  selectorObjs = [
    { selector: '.nav-menu', scrollClass: 'nav-menu-scroll'},
    { selector: '.div-spacer', scrollClass: 'div-spacer-scroll'}
  ];
  selectorObjArray: SelectorObject[] = this.selectorObjs;

  constructor(
    public windowScrollService: WindowScrollService,
    private breakpointObserver: BreakpointObserver
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:Event) {
    this.windowScrollService.setScrollStyles(this.selectorObjArray);
  }

  ngOnInit(): void {
    this.isMobile = this.breakpointObserver
      .observe(['(max-width: 950px)'])
      .pipe(map(({ matches }) => matches));
  }
}
