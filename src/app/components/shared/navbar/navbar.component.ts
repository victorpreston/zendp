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
  currentLanguage!: Language;
  languages: Language[] = [
    { code: 'en', name: 'English', flag: 'assets/navbar/us.svg' },
    { code: 'fr', name: 'Français', flag: 'assets/navbar/fr.svg' }
  ];

  constructor(private translate: TranslateService) {
    
    const storedLangCode = localStorage.getItem('selectedLanguage');
    if (storedLangCode) {
      const storedLang = this.languages.find(lang => lang.code === storedLangCode);
      if (storedLang) {
        this.currentLanguage = storedLang;
        this.translate.use(storedLang.code);
      }
    } else {
      
      this.currentLanguage = { code: 'en', name: 'English', flag: 'assets/navbar/us.svg' };
      this.translate.setDefaultLang('en');
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang: Language): void {
    this.currentLanguage = lang;
    this.translate.use(lang.code);
    localStorage.setItem('selectedLanguage', lang.code);
    this.isDropdownOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
