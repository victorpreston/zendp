// navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
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

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang: Language): void {
    this.currentLanguage = lang;
    this.isDropdownOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
