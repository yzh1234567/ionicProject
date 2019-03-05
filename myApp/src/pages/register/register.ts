import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import { MyHttpServiceProvider } from '../../providers/my-http-service/my-http-service';

import {UserPage} from "../user/user";



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 uname="";
 upwd="";
 upwd1="";
 phone="";
 isShow=false;
 testPhone=false;
 testUname=false;
 testUpwd=false;
 testUpwd1=false;
 myTime=3;
 url="http://superlove.applinzi.com/register";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private myHttpService:MyHttpServiceProvider,
    private toastCtrl:ToastController,
    private alertCtrl:AlertController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  // 手机号码验证
    phoneBlur(){
        var reg=/^1[3-9]\d{9}$/i;
       if(reg.test(this.phone)){
          this.testPhone=true; 
       }
    }
    phoneChange(){
       this.testPhone=true; 
    }
  //用户名验证
    unameBlur(){
      var reg=/^[\w\u4e00-\u9fa5]{6,12}$/i;
      if(reg.test(this.uname)){
        this.testUname=true;
      }
    }
    unameChange(){
      this.testUname=true;
    }
    // 密码验证
    upwdBlur(){
       var reg=/^[\w*.,;?!#]{8,20}$/i;
       if(reg.test(this.upwd)){
            this.testUpwd=true;
       }
    }
    upwdChange(){
      this.testUpwd=true;
    }
    // 确认密码验证
    upwd1Blur(){
      if(this.upwd==this.upwd1){
        this.testUpwd1=true;
      }
    }
    upwd1Change(){
      this.testUpwd1=true;
    }
   // 验证按钮是否处于禁用状态
      btnDisabled(arg1,arg2){
        if(arg1&&arg2){
            return  false;
        }else{
          return true;
        }
      }
  // 点击下一步按钮事件
  next(){
        this.isShow=true;
  }
  // 注册信息
  register(){
        this. postRequest();
  }

  // 发送post请求
  postRequest(){
     this.myHttpService.SendPostRequest(this.url,{phone:this.phone,uname:this.uname,upwd:this.upwd},(result:any)=>{
       if(result.code==1){
             var myToast=this.toastCtrl.create({
                  message:"恭喜"+this.uname+"注册成功,"+this.myTime+"s后返回登录页面",
                  position:"bottom",
                  showCloseButton:true,
                  closeButtonText:"关闭", 
             });
             var myJump=setInterval(()=>{
                 this.myTime--;
                 if(this.myTime==0){
                     clearInterval(myJump);
                     this.navCtrl.push(UserPage);
                     myToast.dismiss();
                 }
             },1000)
             myToast.present();
       }else{
         var myAlert=this.alertCtrl.create({
               title:"注册失败",
               subTitle:result.msg,
               buttons:[{text:"关闭"}]

         });
         myAlert.present();
       }
     })
  }

}
