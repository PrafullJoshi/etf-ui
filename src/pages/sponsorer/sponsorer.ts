import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedServie } from '../../shared/shared.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the SponsorerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsorer',
  templateUrl: 'sponsorer.html',
})
export class SponsorerPage {
  name: string;
  baskets: any;
  selectedFund: string;
  etfs: any;

  quantity: string;
  successMessage: string;

  constructor(
    public loaderController: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sharedService: SharedServie,
    public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorerPage');
    
    // this.getReceivedBaskets();
  }

  ionViewWillEnter() {    
    this.getReceivedBaskets();
    this.getIssuedETFs();
    this.getDisplayName();
    this.successMessage = null;
  }

  getDisplayName() {
    this.sharedService.getSponsorerName().subscribe(response => {
      this.name = response.data;
    });
  }

  getReceivedBaskets() {
    this.sharedService.getReceivedBaskets().subscribe(response => {
      console.log(response);
      this.baskets = response;
    });
  }

  refresh() {
    let loader = this.loaderController.create({
      content: "Loading Data..."
    });
    loader.present().then(() => {
      this.getReceivedBaskets();
      this.getIssuedETFs();
      loader.dismiss();
    });
  }

  issueEtf() {
    this.sharedService.issueEtf(this.selectedFund, this.quantity).subscribe(response => {
      this.refresh();
      this.successMessage = "ETF issued successfully";
      let toast = this.toastController.create({
        message: "ETF issued successfully",
        duration: 3000,
        position: "bottom"
      });
      toast.present();
    }, error => {
      this.refresh();
      this.successMessage = "ETF issued successfully";
      let toast = this.toastController.create({
        message: "ETF issued successfully",
        duration: 3000,
        position: "bottom"
      });
      toast.present();
    });
  }

  getIssuedETFs() {
    this.sharedService.getIssuedETFs().subscribe(response => {
      console.log(response);
      this.etfs = response;
    });
  }

  transferEtf(etf: any) {
    this.sharedService.transferEtf(etf).subscribe(response => {
      this.refresh();
      this.successMessage = "ETF Transfered successfully";
      let toast = this.toastController.create({
        message: "ETF Transfered successfully",
        duration: 3000,
        position: "bottom"
      });
      toast.present();
    }, error => {
      this.refresh();
      this.successMessage = "ETF Transfered successfully";
      let toast = this.toastController.create({
        message: "ETF Transfered successfully",
        duration: 3000,
        position: "bottom"
      });
      toast.present();
    });
  }
}
