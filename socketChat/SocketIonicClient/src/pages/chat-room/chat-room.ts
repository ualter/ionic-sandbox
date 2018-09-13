import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { XpSocketService }  from '../../app/services/xpsocket.service';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  messages = [];
  nickname = '';
  message = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private xpSocket: XpSocketService) {
    this.nickname = this.navParams.get('nickname');

    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
  }

  sendMessage() {
    this.xpSocket.getSocket().emit('add-message', { text: this.message });
    this.message = '';
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.xpSocket.getSocket().on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.xpSocket.getSocket().on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatRoomPage');
  }

  ionViewWillLeave() {
    this.xpSocket.getSocket().disconnect();
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
