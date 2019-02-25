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
  myShow=[
    {show:true},
    {show:false},
    {show:false},
    {show:false}
  ];
  myTopData=[
    {
      myActive:"active",
      myColor:"danger",
      myName:"pin",
      title:"商品"
    },
    {
      myActive:"",
      myColor:"dark",
      myName:"",
      title:"详情"
    },
    {
      myActive:"",
      myColor:"dark",
      myName:"",
      title:"评论"
    },
    {
      myActive:"",
      myColor:"dark",
      myName:"",
      title:"推荐"
    }
  ];
  myHeart="attention";
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
  // 点击顶部按钮，确认页面显示内容
  myLocation(e){
   
         for(var i=0;i<this.myTopData.length;i++){
            if(i==e){
                  this.myTopData[i].myActive="active";
                  this.myTopData[i].myColor="danger";
                  this.myTopData[i].myName="pin";
            }else{
                  this.myTopData[i].myActive="";
                  this.myTopData[i].myColor="dark";
                  this.myTopData[i].myName="";
            }
          console.log(this.myTopData);
          for(var j=0;j<this.myShow.length;j++){
             if(j==e){
                 this.myShow[j].show=true;
             }else{
                 this.myShow[j].show=false;
             }
          }
         }
  }
  // 点击关注
  myAttention(){
     if(this.myHeart=="attention"){
        this.myHeart="attention attention1";
     }else{
        this.myHeart="attention";
     }
  }
}
