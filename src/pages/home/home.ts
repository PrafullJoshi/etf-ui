import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedServie } from '../../shared/shared.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  participants = {};

  constructor(
    public navCtrl: NavController,
    public sharedService: SharedServie) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.loadPeers();
  }

  loadPeers() {
    this.sharedService.getPeers().subscribe(response => {
      this.participants = response;
    });
  }
}
