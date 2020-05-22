import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page-component/about-page.component';
import { AboutPageNavComponent } from './about-page-nav/about-page-nav.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    AboutPageNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutPageModule { }
