import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
       {
          path: 'account',
          component: AccountComponent
       },
       {
          path: '',
          component: LoginComponent
       }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
