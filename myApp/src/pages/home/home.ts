import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyHttpServiceProvider} from "../../providers/my-http-service/my-http-service"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mySlides=[];
  myF1Data=[];
  myF2Data=[];
  constructor(public navCtrl: NavController,
    private myHttpService :MyHttpServiceProvider
    ) {

  }
  ionViewDidLoad(){
       var url="http://localhost:3000/index";

       this.myHttpService.SendGetRequest(url,(result)=>{
               if(result.code==200){
                  this.mySlides=result.data.adData;
                  this.myF1Data=result.data.dataF1;
                  this.myF2Data=result.data.dataF2;
               } 
       })
  }
   
}
