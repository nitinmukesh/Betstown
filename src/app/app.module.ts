import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from 'app/app_routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

// Pages
import { HomeComponent } from 'app/pages/home/home.component';
import { ProfileComponent } from 'app/pages/profile/profile.component';
import { SingupComponent } from 'app/pages/singup/singup.component';
import { UserComponent } from 'app/pages/user/user.component';
import { NewsComponent } from './pages/news/news.component';

// Components

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SingupComponent,
    UserComponent,
    NewsComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
