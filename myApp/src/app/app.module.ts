import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpClientModule} from "@angular/common/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {UserPage} from "../pages/user/user";
import {DetailPage} from "../pages/detail/detail";
import {SearchPage} from "../pages/search/search";
import{RegisterPage} from "../pages/register/register";
import{OrderPage} from "../pages/order/order";
import { PayPage } from '../pages/pay/pay';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyHttpServiceProvider } from '../providers/my-http-service/my-http-service';


@NgModule({
  declarations: [
    PayPage,
    OrderPage,
    RegisterPage,
    SearchPage,
    DetailPage,
    UserPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  entryComponents: [
    PayPage,
    OrderPage,
    RegisterPage,
    SearchPage,
    DetailPage,
    UserPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
 
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyHttpServiceProvider
  ]
})
export class AppModule {}
