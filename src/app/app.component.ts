import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kennanrsb-portfolio';

  ngOnInit() {
    AOS.init({
      duration: 1200,
      delay: 200,
      once: true
    });
  }
}
