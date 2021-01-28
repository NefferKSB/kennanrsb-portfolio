import { ElementRef, HostListener } from "@angular/core";
import { Injectable } from "@angular/core";
import { SelectorObject } from "../models/selector-object-model";

@Injectable({
  providedIn: 'root',
})

export class WindowScrollService {
  @HostListener('window:scroll', ['$event'])

  public setScrollStyles(selectorObjs: { selector:string, scrollClass:string}[]) {
    selectorObjs.forEach((selectorObj: SelectorObject) => {
      const selector:any = document.querySelector(selectorObj.selector);

      if (window.pageYOffset > selector.clientHeight) {
        selector.classList.add(selectorObj.scrollClass);
      } else {
        selector.classList.remove(selectorObj.scrollClass);
      }
    })
  }
}
