import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class XpSocketService {

  private socket = null;

  constructor() { }

  configSocket(url: string) {
    this.socket = new Socket({ url: url, options: {} });
  }

  getSocket() {
    if ( this.socket == null ) {
      throw new Error('Socket not configured, call confiSocket(url) before start using it.');
    }
    return this.socket;
  }

}