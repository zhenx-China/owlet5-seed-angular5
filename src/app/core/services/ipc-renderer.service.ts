import { Injectable } from '@angular/core';

declare var electron: any;

@Injectable()
export class IpcRendererService {

  private ipcRenderer;

  constructor() {
    if (this.isElectron()) {
      this.ipcRenderer = electron.ipcRenderer;
    } else {
      this.ipcRenderer = {
        on: () => { },
        send: () => { },
        sendSync: () => { },
      };
    }
  }

  on(message: string, done) {
    return this.ipcRenderer.on(message, done);
  }

  send(message: string, ...args) {
    return this.ipcRenderer.send(message, args);
  }

  sendSync(message: string, ...args) {
    return this.ipcRenderer.sendSync(message, args);
  }

  api(action: string, args: any[]) {
    this.ipcRenderer.send('api', action, args);
    return new Promise((resolve, reject) => {
      this.ipcRenderer.once('$(action)reply', (e: any, reply: any, status: any) => {
        if (!reply) {
          return reject(status);
        }
        return resolve(reply);
      });
    });
  }

  private isElectron() {
    return window && window['process'] && window['process']['type'];
  }
}
