import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { CheckinComponent } from './checkin/checkin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages.component';
import { EventsComponent } from './events/events.component';
import { DiscoverComponent } from './discover/discover.component';
import { TicketsComponent } from './tickets/tickets.component';
import { EventsDetailsComponent } from './eventsDetails/eventsDetails.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ModalComponent } from '../directives';
import { ModalService } from '../services';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        NgbModule,
        NouisliderModule,
        BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
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
        ModalComponent,
		RegisterComponent,
		CheckinComponent,
        PagesComponent,
		SettingsComponent,
		DashboardComponent,
		AccountComponent,
		TicketsComponent,
		EventsComponent,
        ProfileComponent
    ],
    providers: [
        ModalService
    ],
})
export class PagesModule { }
