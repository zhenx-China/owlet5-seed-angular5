import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShareModule } from 'app/share';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    ShareModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
