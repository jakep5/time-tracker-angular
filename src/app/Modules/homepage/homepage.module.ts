import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomepageComponent } from './homepage-component/homepage.component';
import { HomepageNavComponent } from './homepage-nav/homepage-nav.component';
import { InfoComponentComponent } from './more-info-component/info-component.component';




@NgModule({
  declarations: [ HomepageComponent, HomepageNavComponent, InfoComponentComponent ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomepageModule { }
