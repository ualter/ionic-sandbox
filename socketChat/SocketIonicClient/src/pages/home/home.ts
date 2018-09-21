import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ChatRoomPage } from '../chat-room/chat-room';
import { XpSocketService } from '../../app/services/xpsocket.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nickname = '';
  ws = null;

  private socketTcpId: number;

  constructor(public navCtrl: NavController, private xpSocket: XpSocketService, private httpClient: HttpClient, private platform: Platform) {
    /* platform.ready().then((readySource) => {
      if(readySource=='cordova') {
      }
    });  */
  }

  arrayBuffer2str(buf) {
		var str= '';
		var ui8= new Uint8Array(buf);
		for (var i= 0 ; i < ui8.length ; i++) {
			str= str+String.fromCharCode(ui8[i]);
		}
		return str;
	}

	str2arrayBuffer(str) {
		var buf= new ArrayBuffer(str.length);
		var bufView= new Uint8Array(buf);
		for (var i= 0 ; i < str.length ; i++) {
			bufView[i]= str.charCodeAt(i);
  		}
		return buf;
	}

  joinChat() {
    this.ws = new WebSocket("ws://localhost:8080/websocket/chat/" + this.nickname, []);
    this.ws.onmessage = this.handleMessageReceived;
    this.ws.onopen  = this.handleConnected;
    this.ws.onerror = this.handleError;
  }

  ngOnInit(): void {
    /* ws = new WebSocket("ws://localhost:8080/websocket/chat/Other", []);
    ws.onmessage = this.handleMessageReceived;
    ws.onopen  = this.handleConnected;
    ws.onerror = this.handleError; */
  }

  handleMessageReceived(data) {
    console.log(data.data);
  }

  handleConnected(data) {
    console.log(data.data);
  }

  handleError(data) {
    console.log(data);
  }




}
