import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { Socket } from 'ng-socket-io';

// https://github.com/bougarfaoui/ng-socket-io
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

export class SocketXpPlugin extends Socket {
  constructor(public UrlXpPlugin: string) {
    super({url: UrlXpPlugin, options: {} });
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //SocketIoModule.forRoot(config)
    SocketIoModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocketXpPlugin,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}