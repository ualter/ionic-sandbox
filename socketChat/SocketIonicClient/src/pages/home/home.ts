import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatRoomPage } from '../chat-room/chat-room';
import { XpSocketService } from '../../app/services/xpsocket.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nickname = '';

  constructor(public navCtrl: NavController, private xpSocket: XpSocketService) {
  }

  joinChat() {
    this.xpSocket.configSocket("http://192.168.0.22:3001");
    this.xpSocket.getSocket().emit('set-nickname', this.nickname);
    this.navCtrl.push(ChatRoomPage, { nickname: this.nickname });
  }

}
