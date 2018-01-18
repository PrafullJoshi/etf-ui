import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedServie } from '../../shared/shared.service';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the TrxDataModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trx-data-modal',
  templateUrl: 'trx-data-modal.html',
})
export class TrxDataModalPage {

  data: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public shatedService: SharedServie,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrxDataModalPage');
    this.data = this.shatedService.getData();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
