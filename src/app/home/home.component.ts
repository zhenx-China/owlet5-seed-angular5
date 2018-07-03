import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/services';
import { IpcRendererService} from 'app/core/services';
import { EevntType } from 'app/core/services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss'
  ]
})
export class HomeComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private ipcRenderer: IpcRendererService,
    private eventType: EevntType
  ) {
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.ipcRenderer.send(this.eventType.EXIT_APP);
      this.router.navigate(['login']);
    });
  }
}
