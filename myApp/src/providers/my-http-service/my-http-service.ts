import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoadingController} from "ionic-angular";


/*
  Generated class for the MyHttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyHttpServiceProvider {

  constructor(public http: HttpClient,
    private loadingCtrl:LoadingController
    ) {
    
  }
    //  创建自定义服务类发送get请求的方法
    SendGetRequest(url,handler){
       var myloading= this.loadingCtrl.create({
             content:"正在加载中..."
       });
       myloading.present();
       this.http.get(url,{withCredentials:true}).subscribe((result:any)=>{
              // 成功请求数据后，对请求的数据进行操作
              handler(result);
              myloading.dismiss();
       })
    }
    // 创建自定义服务类发送post请求的方法
    SendPostRequest(url:any,obj:any,handler:any){
        var myloading=this.loadingCtrl.create({
          content:"正在加载中..."
        });
        myloading.present();
        this.http.post(url,obj,{withCredentials:true}).subscribe((result:any)=>{
          //  成功请求数据后，对请求的数据进行操作
          handler(result);
          // 操作数据后，关闭myloading
          myloading.dismiss();
        })
    }

    
}
