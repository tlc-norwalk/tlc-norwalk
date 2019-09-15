import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const FB: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, AfterViewInit {

  constructor() { }

  public pluginWidth : string;

  ngOnInit() {
    this.pluginWidth = window.innerWidth < 500 ? window.innerWidth + "px" : "500px"
  }

  ngAfterViewInit() {
    FB.XFBML.parse();
  }

}
