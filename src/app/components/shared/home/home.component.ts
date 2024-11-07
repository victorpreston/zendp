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
  isSendDropdownOpen = false;
  isReceiveDropdownOpen = false;
  isMethodDropdownOpen = false;
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
    // { country: 'Belgium', currency: 'EUR', flag: 'assets/home/flags/belgium.svg' },
    { country: 'Canada', currency: 'CAD', flag: 'assets/home/flags/cad.svg' },
    // { country: 'France', currency: 'EUR', flag: 'assets/home/flags/france.svg' },
    // { country: 'Germany', currency: 'EUR', flag: 'assets/home/flags/germany.svg' },
    // { country: 'Ireland', currency: 'EUR', flag: 'assets/home/flags/ireland.svg' },
    // { country: 'Italy', currency: 'EUR', flag: 'assets/home/flags/italy.svg' },
    // { country: 'Portugal', currency: 'EUR', flag: 'assets/home/flags/portugal.svg' },
    // { country: 'Spain', currency: 'EUR', flag: 'assets/home/flags/spain.svg' },
    { country: 'United Kingdom', currency: 'GBP', flag: 'assets/home/flags/gbp.svg' },
    { country: 'United States', currency: 'USD', flag: 'assets/home/flags/usd.svg' }
  ];
  receiveCurrencyList = [
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
    this.isMethodDropdownOpen = false;
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
    this.isSendDropdownOpen = !this.isSendDropdownOpen;
    this.isReceiveDropdownOpen = false;
    this.isMethodDropdownOpen = false;
  }

  selectCurrency(currency: string): void {
    this.selectedSendCurrency = currency;
    this.isSendDropdownOpen = false;
    this.onCurrencyChange();
  }

  toggleReceiveCurrencyDropdown(): void {
    this.isReceiveDropdownOpen = !this.isReceiveDropdownOpen;
    this.isSendDropdownOpen = false;
    this.isMethodDropdownOpen = false;
  }

  selectReceiveCurrency(currency: string): void {
    this.selectedReceiveCurrency = currency;
    this.isReceiveDropdownOpen = false;
    this.onCurrencyChange();
  }

  toggleMethodDropdown(): void {
    this.isMethodDropdownOpen = !this.isMethodDropdownOpen;
    this.isSendDropdownOpen = false;
    this.isReceiveDropdownOpen = false;
  }
}