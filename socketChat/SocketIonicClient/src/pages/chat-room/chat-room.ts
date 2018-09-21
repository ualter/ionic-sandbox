import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { XpWebSocketService }  from '../../app/services/xp.web.socket.service';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  messages = [];
  nickname = '';
  message = '';
  subscription = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private xpWsSocket: XpWebSocketService) {
    this.nickname = this.navParams.get('nickname');

    this.subscription = this.xpWsSocket.connect("ws://localhost:8080/websocket/chat/" + this.nickname).subscribe(d => {
      console.log("Chat-Room...: " + d.data);
      var json = JSON.parse(d.data);
      this.messages.push(json.content);
    });
    
    /* this.getMessages().subscribe(message => {
      this.messages.push(message);
    }); */

    /* xpSocket.onConnection().subscribe(message => {
      this.showToast('User: ' + message);
    }); */

   /*  this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    }); */
  }

  sendMessage() {
    this.xpWsSocket.getWebSocket().send(this.message);
    this.message = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatRoomPage');
  }

  ionViewWillLeave() {
    //this.xpSocket.getWebSocket().disconnect();
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
