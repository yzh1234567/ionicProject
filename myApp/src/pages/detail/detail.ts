import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';


import {ContactPage} from "../contact/contact";
import { MyHttpServiceProvider } from '../../providers/my-http-service/my-http-service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  cart=ContactPage; 
  url="http://localhost:3000/productDetail";
  detailData=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private myHttpService:MyHttpServiceProvider,
    private actionSheetCtrl:ActionSheetController,
    ) {
  }

  ionViewDidLoad() {
       this.getRequest(this.url);
  }

  //  分享事件
  share(){
         var myAction=this.actionSheetCtrl.create({
                title:"分享到",
                buttons:[
                   {
                    text:"QQ",
                   
                   },
                   {
                     text:"微信"
                   },
                   {
                      text:"取消"
                   }
                ]
         })
         myAction.present();
  }
  // 发送get请求
  getRequest(url){
      this.myHttpService.SendGetRequest(url,(result:any)=>{
             if(result.code==1){
                  this.detailData=result.msg;
             }
      })
  }
}
