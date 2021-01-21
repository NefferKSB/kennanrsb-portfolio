import { HostListener } from "@angular/core";
import { Injectable } from "@angular/core";
import { SelectorObject } from "../models/selector-object-model";

@Injectable({
  providedIn: 'root',
})

export class WindowScrollService {
  @HostListener('window:scroll', ['$event'])

  public setScrollStyles(selectorObjs: { selector:string, scrollClass:string}[]) {

    const clientHeight = 116; //The clientHeight should be the set height of the navbar
    selectorObjs.forEach((selectorObj: SelectorObject) => {
      const selector:any = document.querySelector(selectorObj.selector);

      if (window.pageYOffset > clientHeight) {
        selector.classList.add(selectorObj.scrollClass);
      } else {
        selector.classList.remove(selectorObj.scrollClass);
      }
    })
  }
}
