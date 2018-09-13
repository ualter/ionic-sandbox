import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  ipServer: string = "localhost:3031";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

}
