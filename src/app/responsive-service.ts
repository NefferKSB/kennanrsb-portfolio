import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()

export class responsiveService {
  private isMobile = new Subject();
  public screenWidth: string;

  constructor() {
    this.checkWidth();
    this.screenWidth ="";
  }

  onMobileChange(status: boolean) {
    this.isMobile.next(status);
  }

  getMobileStatus(): Observable<any> {
    return this.isMobile.asObservable();
  }

  public checkWidth() {
    const width = window.innerWidth;
    if (width <= 768) {
        this.screenWidth = 'sm';
        this.onMobileChange(true);
    } else if (width > 768 && width <= 992) {
        this.screenWidth = 'md';
        this.onMobileChange(false);
    } else {
        this.screenWidth = 'lg';
        this.onMobileChange(false);
    }
  }
}
