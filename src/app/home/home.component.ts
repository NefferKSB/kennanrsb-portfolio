import { Component, HostListener } from '@angular/core';

@Component ({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isScrolled = false;

  @HostListener('window:scroll')
  scrollEvent() {
    window.pageYOffset >= 116 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}
