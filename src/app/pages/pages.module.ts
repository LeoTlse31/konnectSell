import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { CheckinComponent } from './checkin/checkin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { EventsComponent } from './events/events.component';
import { DiscoverComponent } from './discover/discover.component';
import { TicketsComponent } from './tickets/tickets.component';
import { EventsDetailsComponent } from './eventsDetails/eventsDetails.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
		EventsDetailsComponent,
		AttendeesComponent,
		DiscoverComponent,
		RegisterComponent,
		CheckinComponent,
        PagesComponent,
		DashboardComponent,
		AccountComponent,
		TicketsComponent,
		EventsComponent,
        ProfileComponent
    ]
})
export class PagesModule { }
