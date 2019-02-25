import { Component } from '@angular/core';
import { NavController ,ToastController} from 'ionic-angular';
import { MyHttpServiceProvider } from '../../providers/my-http-service/my-http-service';

import{UserPage} from "../user/user";
import{OrderPage} from "../order/order" ;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pageCount=1; //默认购物车至少有一页数据
  pno=1;       //查询第一页数据
  pageSize=5;  //每一页显示五条数据
  url="http://localhost:3000/queryCart";
  cart=[];
  isAllSelected=false;
  constructor(public navCtrl: NavController,
    private myHttpService:MyHttpServiceProvider,
    private toastCtrl:ToastController
    ) {
         
  }
   ionViewWillEnter(){
       this.getRequest(this.url);
   }
  // 向后台发送get请求
  getRequest(url){
     this.myHttpService.SendGetRequest(url,(result:any)=>{
        if(result.code==1){
              this.pageCount=result.msg.pageCount;
              this.cart=result.msg.data;
              this.isAllSelected=false;
              for(var i=0;i<this.cart.length;i++){
                  this.cart[i].isSelected=false;
              }
        }else if(result.code==-1){
               var myToast=this.toastCtrl.create({
                     message:result.msg,
                     position:"middle",
               });
               setTimeout(()=>{
                   this.navCtrl.push(UserPage);
                   myToast.dismiss();
               },3000)
               myToast.present();
        }else {
            this.cart=[];
        }
     })
  }
  // 下拉刷新
  refreshPage(refresh){
      setTimeout(()=>{
            this.getRequest(this.url);
            refresh.complete();
      },2000)
  }
  // 上拉加载更多
  loadMore($event){
      this.pno++;
      var pno=this.pno;
      var pageSize=this.pageSize;
      var url=this.url+"?pno="+pno+"&pageSize="+pageSize;
      setTimeout(()=>{
             if(pno<=this.pageCount){
                this.myHttpService.SendGetRequest(url,(result:any)=>{
                      if(result.code==1){
                            this.pageCount=result.msg.pageCount;
                            this.isAllSelected=false;
                            for(var i=0;i<result.msg.data.length;i++){
                                 this.cart.push(result.msg.data[i])
                            };
                            for(var j=0;j<this.cart.length;j++){
                              this.cart[j].isSelected=false;
                          };
                      }else if(result.code==-1){
                            var myToast=this.toastCtrl.create({
                                  message:result.msg,
                                  position:"middle",
                            });
                            setTimeout(()=>{
                                this.navCtrl.push(UserPage);
                                myToast.dismiss();
                            },3000)
                            myToast.present();
                      }else {
                          this.cart=[];
                      }
                    });
          }
          $event.complete();
      },2000)
  }
  // 全选按钮事件
  myAllSelect(){
       for(var i=0;i<this.cart.length;i++){
           this.cart[i].isSelected=this.isAllSelected;
       }
  }
  // 选择指定商品的按钮事件
  mySelect(){
      var isTrue=true;
      for(var i=0;i<this.cart.length;i++){
          isTrue=this.cart[i].isSelected&&isTrue;
      };
      this.isAllSelected=isTrue;
  }
  // 结算选择购买商品的总金额
    calcSum(){
        var sum=0.00;
        for(var i=0;i<this.cart.length;i++){
            if(this.cart[i].isSelected){
              sum=sum+this.cart[i].count*this.cart[i].new_price;
            }
        };
        return sum ;
    }
    // 结算按钮
    myPay(){
        this.navCtrl.push(OrderPage);
    }
    // 修改购买商品的数量
    productCount(i,e){
       this.cart[i].count+=e;
       if(this.cart[i].count<1){
          this.cart[i].count=1
       }else if(this.cart[i].count>99){
          this.cart[i].count=99
        };
        var count=this.cart[i].count;
        var cid=this.cart[i].cid;
        var url="http://localhost:3000/updateCart?count="+count+"&cid="+cid;
        this.myHttpService.SendGetRequest(url,(result:any)=>{
           
        })
    }
    // 删除指定的商品
    deleteProduct(i){
        var cid=this.cart[i].cid;
        var url="http://localhost:3000/deleteCart?cid="+cid;
        this.myHttpService.SendGetRequest(url,(result:any)=>{
        })
    }
}
