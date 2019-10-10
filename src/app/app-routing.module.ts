import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { EventsComponent } from './events/events.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { AboutComponent } from './about/about.component';
import { GivingComponent } from './giving/giving.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'get-involved', component: EventsComponent},
  {path: 'meet-the-team', component: MeetTheTeamComponent},
  {path: 'about', component: AboutComponent},
  {path: 'donate', component: GivingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
