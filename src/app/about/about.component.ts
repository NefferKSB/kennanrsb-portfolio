import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public rowHeight: string;
  public margin: string;

  constructor() {
    this.rowHeight = "500px";
    this.margin = "20px 20px";
  }

  ngOnInit() {

  }
}
