import { Component } from '@angular/core';
import { ConfigPage } from '../config/config'
import { HomePage } from '../home/home'

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = ConfigPage;
  tab2Root = HomePage;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
