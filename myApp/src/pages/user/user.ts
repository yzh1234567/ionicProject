import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ MyHttpServiceProvider} from "../../providers/my-http-service/my-http-service";
import{ToastController} from "ionic-angular";

import {RegisterPage} from "../register/register";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  register=RegisterPage;
  isLogin=false;
  uname="";
  upwd="";
  url="http://localhost:3000/login";
  url1="http://localhost:3000/logout";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private myHttpService:MyHttpServiceProvider,
    private toastCtl:ToastController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  
  //登陆功能
  login(){
      this.postRequest(this.url,{uname:this.uname,upwd:this.upwd},true);
  }
  // 退出登陆
  logout(){
      this.postRequest(this.url1,{uname:this.uname,upwd:this.upwd},false);
  }
  // 发送post请求
  postRequest(url,params,str){
      this.myHttpService.SendPostRequest(url,params,(result)=>{
            if(result.code==1){
                  this.isLogin=str;
                  this.upwd="";
            }else{
                var myToast= this.toastCtl.create({
                      message:result.msg,
                      duration:2000,
                      position:"bottom",
                      cssClass:"background:#eee,color:#000",
                 });
                 myToast.present();
            }
      })

  }
}
