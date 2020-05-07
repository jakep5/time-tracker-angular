import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Modules/shared/shared.module';
import { HomepageModule } from './Modules/homepage/homepage.module';
import { SigninModule } from './Modules/signin/signin.module';
import { SignupModule } from './Modules/signup/signup.module';
import { MainPageModule } from './Modules/main-page/main-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomepageModule,
    SigninModule,
    SignupModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
