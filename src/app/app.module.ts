import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthParticipantPageModule } from '../pages/auth-participant/auth-participant.module';
import { SponsorerPageModule } from '../pages/sponsorer/sponsorer.module';
import { NotaryPageModule } from '../pages/notary/notary.module';
import { AuthParticipantPage } from '../pages/auth-participant/auth-participant';
import { SponsorerPage } from '../pages/sponsorer/sponsorer';
import { NotaryPage } from '../pages/notary/notary';
import { SharedServie } from '../shared/shared.service';
import {HttpClientModule} from '@angular/common/http';
import { TrxDataModalPage } from '../pages/trx-data-modal/trx-data-modal';
import { TrxDataModalPageModule } from '../pages/trx-data-modal/trx-data-modal.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AuthParticipantPageModule,
    SponsorerPageModule,
    NotaryPageModule,
    TrxDataModalPageModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthParticipantPage,
    SponsorerPage,
    NotaryPage,
    TrxDataModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SharedServie,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
