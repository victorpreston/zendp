import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ExchangeService } from '../../../services/exchange/exchange.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FilterPipe } from '../../../pipes/filter/filter.pipe';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, FormsModule, FooterComponent, NavbarComponent, FilterPipe],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  searchQuery: string = '';
  countriesList = [
    { country: 'Ghana', currency: 'GHS', flag: 'assets/home/flags/ghs.svg' },
    { country: 'India', currency: 'INR', flag: 'assets/home/flags/inr.svg' },
    { country: 'Kenya', currency: 'KES', flag: 'assets/home/flags/kes.svg' },
    { country: 'Nigeria', currency: 'NGN', flag: 'assets/home/flags/ngn.svg' },
    { country: 'Philippines', currency: 'PHP', flag: 'assets/home/flags/php.svg' },
    { country: 'Zambia', currency: 'ZMW', flag: 'assets/home/flags/zmw.svg' },
    { country: 'Cameroon', currency: 'XAF', flag: 'assets/home/flags/xaf.svg' },
    { country: 'Burundi', currency: 'BIF', flag: 'assets/home/flags/bif.svg' },
    { country: 'Tanzania', currency: 'TZS', flag: 'assets/home/flags/tzs.svg' }
  ];
  selectedSendCurrency: string = 'USD';
  selectedReceiveCurrency: string = 'NGN';
  exchangeRate: number = 0;
  amountToSend: number = 100;
  amountToReceive: number = 0;
  isSendDropdownOpen: boolean = false;
  isReceiveDropdownOpen: boolean = false;
  isMethodDropdownOpen: boolean = false;
  methods = ['Bank Transfer', 'Mobile Wallet', 'Cash Pickup'];
  selectedMethod: string = 'Select method';
  searchQueryCurrency: string = '';
  receiveSearchQuery: string = '';

  faqs = [
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }


  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.loadExchangeRate();
  }

  loadExchangeRate(): void {
    this.exchangeService.getExchangeRates(this.selectedSendCurrency).subscribe(data => {
      this.exchangeRate = data.rates[this.selectedReceiveCurrency];
      this.calculateAmountToReceive();
    });
  }

  calculateAmountToReceive(): void {
    this.amountToReceive = this.amountToSend * this.exchangeRate;
  }

  onAmountToSendChange(): void {
    this.calculateAmountToReceive();
  }

  toggleSendDropdown(): void {
    this.isSendDropdownOpen = !this.isSendDropdownOpen;
  }

  toggleReceiveDropdown(): void {
    this.isReceiveDropdownOpen = !this.isReceiveDropdownOpen;
  }

  selectSendCurrency(currency: string): void {
    this.selectedSendCurrency = currency;
    this.isSendDropdownOpen = false;
    this.loadExchangeRate();
  }

  selectReceiveCurrency(currency: string): void {
    this.selectedReceiveCurrency = currency;
    this.isReceiveDropdownOpen = false;
    this.loadExchangeRate();
  }

  toggleMethodDropdown(): void {
    this.isMethodDropdownOpen = !this.isMethodDropdownOpen;
  }

  selectMethod(method: string): void {
    this.selectedMethod = method;
    this.isMethodDropdownOpen = false;
  }
}
