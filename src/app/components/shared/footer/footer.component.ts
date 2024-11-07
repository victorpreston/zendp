import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isBackToTopVisible: boolean = false;
  isChatVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isBackToTopVisible = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible;
  }
}
