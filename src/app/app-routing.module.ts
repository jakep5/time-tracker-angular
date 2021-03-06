import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './Modules/homepage/homepage-component/homepage.component';
import { SignInPageComponent } from './Modules/signin/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './Modules/signup/sign-up-page/sign-up-page.component';
import { MainPageComponent } from './Modules/main-page/main-page/main-page.component';
import { ProfilePageComponent } from './Modules/profile/profile-page/profile-page.component';



const routes: Routes = [
  { path:"home", component: HomepageComponent },
  { path:"signIn", component: SignInPageComponent},
  { path:"signUp", component: SignUpPageComponent },
  { path:"main", component: MainPageComponent},
  { path: "profile", component: ProfilePageComponent},
  { path: "", redirectTo: "/home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }