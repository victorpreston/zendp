import { Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { OnAppComponent } from './components/shared/on-app/on-app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'on-app', component: OnAppComponent }
];
