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
  faqs = [
    {
      question: 'How long does a transfer take?',
      answer: 'Typically, transfers take between 1-2 business days, but some methods are instant depending on the receiving bank and country.',
      isOpen: false,
    },
    {
      question: 'What are the fees for sending money?',
      answer: 'Our fees vary depending on the transfer amount, destination, and payment method. We offer competitive rates to ensure you get the most value.',
      isOpen: false,
    },
    {
      question: 'Is it safe to send money with ZendP?',
      answer: 'Yes, we use advanced encryption and security protocols to keep your transactions and personal information safe and secure.',
      isOpen: false,
    },
    {
      question: 'Can I track my transfer?',
      answer: 'Yes, you can track your transfer in real-time through our app or website by entering your transaction ID.',
      isOpen: false,
    }
  ];

   toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

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
