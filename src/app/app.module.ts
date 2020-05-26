import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Modules/shared/shared.module';
import { HomepageModule } from './Modules/homepage/homepage.module';
import { SigninModule } from './Modules/signin/signin.module';
import { SignupModule } from './Modules/signup/signup.module';
import { MainPageModule } from './Modules/main-page/main-page.module';
import { ProfileModule } from './Modules/profile/profile.module';
import { UserService } from './Modules/shared/Services/user.service';
import { AboutPageModule } from './Modules/aboutpage/about-page.module';


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
    MainPageModule,
    FormsModule,
    ProfileModule,
    HttpClientModule,
    AboutPageModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
