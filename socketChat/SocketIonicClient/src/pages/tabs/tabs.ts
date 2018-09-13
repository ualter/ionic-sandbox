import { Component } from '@angular/core';
import { ConfigPage } from '../config/config'
import { ChatRoomPage } from '../chat-room/chat-room'

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = ConfigPage;
  tab2Root = ChatRoomPage;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
