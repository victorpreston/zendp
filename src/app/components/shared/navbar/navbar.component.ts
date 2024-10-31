// navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDropdownOpen = false;
  isMenuOpen = false;
  currentLanguage: Language = { code: 'en', name: 'English', flag: 'assets/navbar/us.svg' };
  languages: Language[] = [
    { code: 'en', name: 'English', flag: 'assets/navbar/us.svg' },
    { code: 'fr', name: 'Français', flag: 'assets/navbar/fr.svg' }
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang: Language): void {
    this.currentLanguage = lang;
    this.translate.use(lang.code);
    this.isDropdownOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
