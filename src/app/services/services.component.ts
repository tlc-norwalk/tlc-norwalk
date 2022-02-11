import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const FB: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  public pluginWidth : string;

  ngOnInit() {
    this.pluginWidth = window.innerWidth < 500 ? window.innerWidth + "px" : "500px"
  }

  ngAfterViewInit() {
    FB.XFBML.parse();
  }
}
