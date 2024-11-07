import { Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { OnAppComponent } from './components/shared/on-app/on-app.component';
import { AboutComponent } from './components/shared/about/about.component';
import { FaqComponent } from './components/shared/faq/faq.component';
import { CountriesComponent } from './components/core/countries/countries.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'on-app', component: OnAppComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'faqs', component: FaqComponent},
    { path: 'countries', component: CountriesComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: '**', component: NotfoundComponent}

];
