import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { SocketXpPlugin } from '../../app/app.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nickname = '';

  constructor(public navCtrl: NavController, private socket: Socket, private socketXpPlugin: SocketXpPlugin) {

  }

  joinChat() {

    this.socketXpPlugin = new SocketXpPlugin("http://192.168.0.22:3001");

    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  }

}
