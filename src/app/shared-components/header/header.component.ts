import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public topHeaderLinks: Array<any>;
  public primaryNavLinks: Array<any>;
  public learnMoreLinks: Array<any>;
  public countries: any;
  public languages: any;

  constructor() {
  }

  public ngOnInit(): void {
    this.getTopHeaderLinks();
    this.getPrimaryNavLinks();
    this.getLearnMoreLinks();
    this.getCountryList();
    this.getLanguageList();
  }

  public getCountryList = (): void => {
    this.countries = [
      {
        name: 'Canada',
      },
      {
        name: 'United States',
      },
      {
        name: 'Mexico',
      },
    ];
  }

  public getLanguageList = (): void => {
    this.languages = [
      {
        route: 'contact-us',
        label: 'Contact us',
      },
      {
        route: 'faq',
        label: 'FAQ',
      },
      {
        route: 'moneygram-plus',
        label: 'MoneyGram Plus',
      },
    ];
  }

  public getTopHeaderLinks = (): void => {
    this.topHeaderLinks = [
      {
        route: 'contact-us',
        label: 'Contact us',
      },
      {
        route: 'faq',
        label: 'FAQ',
      },
      {
        route: 'moneygram-plus',
        label: 'MoneyGram Plus',
      },
    ];
  }

  public getPrimaryNavLinks = (): void => {
    this.primaryNavLinks = [
      {
        route: 'account',
        label: 'Send Money',
      },
      {
        route: 'account',
        label: 'Pay Bills',
      },
      {
        route: 'estimate',
        label: 'Estimate Fees',
      },
      {
        route: 'track',
        label: 'Track',
      },
      {
        route: 'locations',
        label: 'Find a Location',
      },
    ];
  }

  public getLearnMoreLinks = (): void => {
    this.learnMoreLinks = [
      {
        route: 'how-to-send-money',
        label: 'How to send money',
      },
      {
        route: 'how-to-receive-money',
        label: 'How to receive money',
      },
      {
        route: 'how-to-pay-bills',
        label: 'How to pay bills',
      },
      {
        route: 'moneygram-plus',
        label: 'MoneyGram Plus',
      },
      {
        route: 'faq',
        label: 'faq',
        bottomDivider: true,
      },
      {
        route: 'all-services',
        label: 'See all services',
      },
    ];
  }

}
