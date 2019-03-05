import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyHttpServiceProvider} from "../../providers/my-http-service/my-http-service";
import {DetailPage} from "../detail/detail";
import{SearchPage} from "../search/search";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mySlides=[];
  myF1Data=[];
  myF2Data=[];
  detail=DetailPage;
  search=SearchPage;
  constructor(public navCtrl: NavController,
    private myHttpService :MyHttpServiceProvider
    ) {

  }
  ionViewDidLoad(){
       this.getRequest();
  }
  // 向后台发送get请求
    getRequest(){
      var url="http://superlove.applinzi.com/index";
      this.myHttpService.SendGetRequest(url,(result)=>{
              if(result.code==200){
                this.mySlides=result.data.adData;
                this.myF1Data=result.data.dataF1;
                this.myF2Data=result.data.dataF2;
              } 
      })
    } 
    // 向下刷新事件
    refreshPage($event){
        setTimeout(()=>{
             this.getRequest();
             $event.complete();
        },2000)
    }
}
