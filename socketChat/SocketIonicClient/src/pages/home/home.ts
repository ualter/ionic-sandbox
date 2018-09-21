import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ChatRoomPage } from '../chat-room/chat-room';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nickname = '';

  constructor(public navCtrl: NavController) {
    /* platform.ready().then((readySource) => {
      if(readySource=='cordova') {
      }
    });  */
  }

  joinChat() {
    this.navCtrl.push(ChatRoomPage, { nickname: this.nickname });
  }

  




}
