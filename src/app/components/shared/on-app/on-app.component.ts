import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-on-app',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, RouterLinkActive, NavbarComponent, FooterComponent],
  templateUrl: './on-app.component.html',
  styleUrl: './on-app.component.css'
})
export class OnAppComponent {
    
}
