import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthParticipantPage } from './auth-participant';

@NgModule({
  declarations: [
    AuthParticipantPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthParticipantPage),
  ],
})
export class AuthParticipantPageModule {}
