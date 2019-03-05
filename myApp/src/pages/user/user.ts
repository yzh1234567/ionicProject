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
  isLogin=0;
  uname="";
  upwd="";
  url="http://superlove.applinzi.com/login";
  url1="http://superlove.applinzi.com/logout";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private myHttpService:MyHttpServiceProvider,
    private toastCtl:ToastController,
    ) {
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad UserPage');
  }
  ionViewWillEnter(){
        this.isLogin=sessionStorage["isLogin"];
        if(!this.isLogin){
          this.isLogin=0; 
        }
        this.uname=sessionStorage["uname"];
  }
  //登陆功能
  login(){
      this.postRequest(this.url,{uname:this.uname,upwd:this.upwd},1,this.upwd);
  }
  // 退出登陆
  logout(){
      this.postRequest(this.url1,{uname:this.uname},0,"");
  }
  // 发送post请求
  postRequest(url,params,num,str){
      this.myHttpService.SendPostRequest(url,params,(result)=>{
            if(result.code==1){
                  this.isLogin=num;
                  this.upwd=str;
                  sessionStorage.setItem("isLogin",num);
                  sessionStorage.setItem("uname",this.uname);
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
