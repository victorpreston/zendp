import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDropdownOpen = false;
  methods = ['Bank Transfer', 'Mobile Wallet', 'Cash Pickup'];
  selectedMethod = 'Select method';
  currentSlide = 0;

  get carouselTransform(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  selectMethod(method: string) {
    this.selectedMethod = method;
    this.isDropdownOpen = false;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + 2) % 2;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 2;
  }
}
