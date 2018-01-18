import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedServie } from '../../shared/shared.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';



/**
 * Generated class for the AuthParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth-participant',
  templateUrl: 'auth-participant.html',
})
export class AuthParticipantPage {

  name: string;
  baskets: any;
  basketHash: string;

  constructor(
    public loaderController: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sharedService: SharedServie,
    public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthParticipantPage');
    this.getDisplayName();
  }

  getDisplayName() {
    this.sharedService.getAPName().subscribe(response => {
      this.name = response;
    });
  }

  refresh() {
    let loader = this.loaderController.create({
      content: "Loading Data..."
    });
    loader.present().then(() => {
      loader.dismiss();
    });
  }

  issueBasket() {
    this.sharedService.issueBasket(this.basketHash).subscribe(response => {
      this.name = response;
      let toast = this.toastController.create({
        message: "Basket being issued",
        duration: 3000,
        position: "bottom"
      });
      toast.present();
    });

    
  }

}
