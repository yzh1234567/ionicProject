import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController } from 'ionic-angular';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl:ViewController,
    private loadingCtrl:LoadingController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }
        //  给模态窗传递参数，根据参数的不同跳转不同页面,由模态窗页面判断
  closeModal(){
    // 给模态窗传递参数
      // this.viewCtrl.dismiss();
      this.viewCtrl.dismiss(0);
  }
  myLoading(){
         var myLoad=this.loadingCtrl.create({
               content:"正在支付..."
         });
         myLoad.present();
         setTimeout(()=>{
            //  myLoad.dismiss();
            //  this.navCtrl.push(HomePage)
            // 给模态窗传递参数
            myLoad.dismiss();
            this.viewCtrl.dismiss(1);
         },3000)
  }
}
