import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedServie } from '../../shared/shared.service';

/**
 * Generated class for the NotaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notary',
  templateUrl: 'notary.html',
})
export class NotaryPage {

  name: string;
  notaryData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sharedService: SharedServie) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotaryPage');
    this.getDisplayName();
    this.getNotaryData();
  }

  getDisplayName() {
    this.sharedService.getNotaryName().subscribe(response => {
      this.name = response.data;
    });
  }

  getNotaryData() {
    this.sharedService.getNotaryData().subscribe(response => {
      console.log("+++++", response);
      this.notaryData = response;

    });
  }

  itemClicked(data: any) {
    
  }
}
