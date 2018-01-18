import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrxDataModalPage } from './trx-data-modal';

@NgModule({
  declarations: [
    TrxDataModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TrxDataModalPage),
  ],
})
export class TrxDataModalPageModule {}
