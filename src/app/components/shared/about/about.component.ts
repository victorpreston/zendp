import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule, NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']  // Corrected to 'styleUrls'
})
export class AboutComponent {
  teamMembers = [
    { name: 'Alice Johnson', position: 'CEO', image: 'assets/team/alice.jpg', bio: 'Leader and visionary with a passion for financial inclusion.' },
    { name: 'John Doe', position: 'CTO', image: 'assets/team/john.jpg', bio: 'Expert in tech-driven solutions for secure transactions.' },
    { name: 'Mary Smith', position: 'COO', image: 'assets/team/mary.jpg', bio: 'Operational mastermind ensuring smooth processes.' }
  ];

  companyValues = [
    { title: 'Integrity', description: 'We uphold the highest standards of integrity in all our actions.' },
    { title: 'Innovation', description: 'Constantly innovating to provide better services.' },
    { title: 'Customer Focus', description: 'Our customers are at the heart of what we do.' }
  ];
}
