import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public listRowHeight: string;
  public listCols: number;
  public listMargin: string;
  public tileRowSpan: number;

  constructor() {
    this.listRowHeight = "13em";
    this.listCols = 2;
    this.listMargin = "40px";
    this.tileRowSpan = 3;
  }

  ngOnInit() {

  }
}
