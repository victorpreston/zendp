import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, NavbarComponent, FooterComponent, FormsModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  searchQuery: string = '';
  faqs = [
    { question: 'How long does a transfer take?', answer: 'Transfers typically take between 1-2 business days, but some methods may be instant.', isOpen: false },
    { question: 'What are the fees for sending money?', answer: 'Fees vary based on the transfer amount, destination, and payment method.', isOpen: false },
    { question: 'Is it safe to send money with ZendP?', answer: 'Yes, we use advanced encryption and security measures to keep your data secure.', isOpen: false },
    { question: 'Can I track my transfer?', answer: 'Yes, you can track your transfer in real-time through our app or website.', isOpen: false },
    { question: 'What types of payment methods are accepted?', answer: 'We accept various payment methods including bank transfers, debit/credit cards, and more.', isOpen: false },
    { question: 'Can I cancel my transfer after sending it?', answer: 'Cancellations depend on the transfer stage. Contact support as soon as possible.', isOpen: false },
    { question: 'How do I verify my identity?', answer: 'You will be guided through a verification process within our app or website.', isOpen: false },
    { question: 'Are there limits on how much I can transfer?', answer: 'Yes, transfer limits vary by country and payment method.', isOpen: false },
    { question: 'Do you offer customer support?', answer: 'Yes, our support team is available 24/7 to assist you.', isOpen: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  filterFaqs() {
    return this.faqs.filter(faq =>
      faq.question.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
