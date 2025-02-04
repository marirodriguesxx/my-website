import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },  // Add default redirection
    { path: 'landing', component: LandingComponent }
];
