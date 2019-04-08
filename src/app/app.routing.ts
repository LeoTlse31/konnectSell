import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';
import { AttendeesComponent } from './pages/attendees/attendees.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { EventsComponent } from './pages/events/events.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { EventsDetailsComponent } from './pages/eventsDetails/eventsDetails.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { AuthGuard } from './guards';

const routes: Routes =[
    { path: '', redirectTo: 'pages/landing', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'pages/landing',     component: LandingComponent },
    { path: 'pages/login',       component: LoginComponent },
    { path: 'pages/register',       component: RegisterComponent },
    { path: 'pages/profile',     component: ProfileComponent },
    { path: 'pages/attendees',     component: AttendeesComponent },	
	{ path: 'pages/events',     component: EventsComponent },
	{ path: 'pages/dashboard',     component: DashboardComponent },
	{ path: 'pages/checkin',     component: CheckinComponent },
	{ path: 'pages/discover',     component: DiscoverComponent },
	{ path: 'pages/account',     component: AccountComponent },	
	{ path: 'pages/tickets',     component: TicketsComponent },
	{ path: 'pages/eventsDetails',     component: EventsDetailsComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
