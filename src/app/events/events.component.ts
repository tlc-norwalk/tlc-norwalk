import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const FB: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    FB.XFBML.parse();
  }

}
