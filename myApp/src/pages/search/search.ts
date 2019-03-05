import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  kwords="";
  kwordList=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  search(){
      if(this.kwords){
          this.kwordList=[this.kwords];
          for(var i=0,kwords="";i<5;i++){
              kwords="商品"+this.kwords+(i+1);
              this.kwordList.push(kwords);
          }
      }else{
            this.kwordList=[];
      }
   }
}
