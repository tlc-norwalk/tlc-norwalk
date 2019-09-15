import { Component } from '@angular/core';
declare const UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tlc-norwalk-angular';
  
  hideSideNav() {
    UIkit.offcanvas(document.getElementById('sidenav')).hide();
  }
}
