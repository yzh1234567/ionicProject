import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import {PayPage} from "../pay/pay";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl:ModalController
    ) {
  }
  order=[];
  sum=0.00;
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  ionViewWillEnter(){
     this.order=this.navParams.data.order;
     this.sum=this.navParams.data.sum;
  }
  //  确认订单功能
  showPay(){
     var myModal=this.modalCtrl.create(PayPage);
     myModal.present();
     myModal.onDidDismiss((result)=>{
         if(result==1){
             this.navCtrl.push(TabsPage)
         }
     })
  }
}
