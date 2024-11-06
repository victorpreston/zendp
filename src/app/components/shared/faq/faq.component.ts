import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, NavbarComponent, FooterComponent, FormsModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  searchQuery: string = '';
  faqs = [
    { questionKey: 'FAQ.QUESTIONS.QUESTION_1.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_1.ANSWER', isOpen: false },
    { questionKey: 'FAQ.QUESTIONS.QUESTION_2.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_2.ANSWER', isOpen: false },
    { questionKey: 'FAQ.QUESTIONS.QUESTION_3.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_3.ANSWER', isOpen: false },
    { questionKey: 'FAQ.QUESTIONS.QUESTION_4.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_4.ANSWER', isOpen: false },
    { questionKey: 'FAQ.QUESTIONS.QUESTION_5.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_5.ANSWER', isOpen: false },
    { questionKey: 'FAQ.QUESTIONS.QUESTION_6.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_6.ANSWER', isOpen: false },
    { questionKey: 'FAQ.QUESTIONS.QUESTION_7.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_7.ANSWER', isOpen: false },
    { questionKey: 'FAQ.QUESTIONS.QUESTION_8.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_8.ANSWER', isOpen: false },
    { questionKey: 'FAQ.QUESTIONS.QUESTION_9.QUESTION', answerKey: 'FAQ.QUESTIONS.QUESTION_9.ANSWER', isOpen: false }
  ];
  popularQuestions = [
    'FAQ.QUESTIONS.QUESTION_1.QUESTION',
    'FAQ.QUESTIONS.QUESTION_2.QUESTION',
    'FAQ.QUESTIONS.QUESTION_3.QUESTION',
    'FAQ.QUESTIONS.QUESTION_4.QUESTION',
    'FAQ.QUESTIONS.QUESTION_5.QUESTION',
    'FAQ.QUESTIONS.QUESTION_6.QUESTION',
    'FAQ.QUESTIONS.QUESTION_7.QUESTION',
    'FAQ.QUESTIONS.QUESTION_8.QUESTION'
  ];

  constructor(private translate: TranslateService) {}

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  filterFaqs() {
    return this.faqs.filter(faq =>
      this.translate.instant(faq.questionKey).toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
