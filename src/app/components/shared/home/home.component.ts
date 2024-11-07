import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { ExchangeService } from '../../../services/exchange/exchange.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../pipes/filter/filter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, NavbarComponent, FooterComponent, TranslateModule, FormsModule, FilterPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDropdownOpen = false;
  isReceiveDropdownOpen = false;
  methods = ['Bank Transfer', 'Mobile Wallet', 'Cash Pickup'];
  selectedMethod = 'Select method';
  currentSlide = 0;
  selectedSendCurrency = 'USD';
  selectedReceiveCurrency = 'NGN';
  exchangeRate = 0;
  amountToSend = 100;
  amountToReceive = 0;
  currencies: string[] = [];
  currencyList = [
    { country: 'Belgium', currency: 'EUR', flag: 'assets/flags/belgium.svg' },
    { country: 'Canada', currency: 'CAD', flag: 'assets/flags/canada.svg' },
    { country: 'France', currency: 'EUR', flag: 'assets/flags/france.svg' },
    { country: 'Germany', currency: 'EUR', flag: 'assets/flags/germany.svg' },
    { country: 'Ireland', currency: 'EUR', flag: 'assets/flags/ireland.svg' },
    { country: 'Italy', currency: 'EUR', flag: 'assets/flags/italy.svg' },
    { country: 'Portugal', currency: 'EUR', flag: 'assets/flags/portugal.svg' },
    { country: 'Spain', currency: 'EUR', flag: 'assets/flags/spain.svg' },
    { country: 'United Kingdom', currency: 'GBP', flag: 'assets/flags/uk.svg' },
    { country: 'United States', currency: 'USD', flag: 'assets/flags/us.svg' }
  ];
  receiveCurrencyList = [
    { country: 'Ghana', currency: 'GHS', flag: 'assets/flags/ghana.svg' },
    { country: 'India', currency: 'INR', flag: 'assets/flags/india.svg' },
    { country: 'Kenya', currency: 'KES', flag: 'assets/flags/kenya.svg' },
    { country: 'Nigeria', currency: 'NGN', flag: 'assets/flags/nigeria.svg' },
    { country: 'Philippines', currency: 'PHP', flag: 'assets/flags/philippines.svg' },
    { country: 'Zambia', currency: 'ZMW', flag: 'assets/flags/zambia.svg' },
    { country: 'Cameroon', currency: 'XAF', flag: 'assets/flags/cameroon.svg' },
    { country: 'Burundi', currency: 'BIF', flag: 'assets/flags/burundi.svg' },
    { country: 'Tanzania', currency: 'TZS', flag: 'assets/flags/tanzania.svg' }
  ];
  searchQuery = '';
  receiveSearchQuery = '';
  faqs = [
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false }
  ];

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.loadExchangeRate();
  }

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

  loadExchangeRate(): void {
    this.exchangeService.getExchangeRates(this.selectedSendCurrency).subscribe(data => {
      this.currencies = Object.keys(data.rates);
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

  onCurrencyChange(): void {
    this.loadExchangeRate();
  }

  toggleCurrencyDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCurrency(currency: string): void {
    this.selectedSendCurrency = currency;
    this.isDropdownOpen = false;
    this.onCurrencyChange();
  }

  toggleReceiveCurrencyDropdown(): void {
    this.isReceiveDropdownOpen = !this.isReceiveDropdownOpen;
  }

  selectReceiveCurrency(currency: string): void {
    this.selectedReceiveCurrency = currency;
    this.isReceiveDropdownOpen = false;
    this.onCurrencyChange();
  }
}
