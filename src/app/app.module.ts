import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app_routing.module';
import { RouterModule } from '@angular/router';

// Components
import { HomeComponent } from 'app/components/home/home.component';
import { ProfileComponent } from 'app/components/profile/profile.component';
import { SingupComponent } from 'app/components/singup/singup.component';
import { UserComponent } from 'app/components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SingupComponent,
    UserComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
