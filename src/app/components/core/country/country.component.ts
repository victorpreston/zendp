import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, RouterLinkActive, NavbarComponent, FooterComponent],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {

}
