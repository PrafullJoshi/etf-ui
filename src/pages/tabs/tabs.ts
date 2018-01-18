import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NotaryPage } from '../notary/notary';
import { SponsorerPage } from '../sponsorer/sponsorer';
import { AuthParticipantPage } from '../auth-participant/auth-participant';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tabAp = AuthParticipantPage;
  tabSponsorer = SponsorerPage;
  tabNotary = NotaryPage;

  constructor() {

  }
}
