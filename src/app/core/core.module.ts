import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AboutModule } from '../about/about.module';
import { PressModule } from '../press/press.module';
import { NotFoundModule } from '../not-found/not-found.module';

import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutModule,
    PressModule,
    NotFoundModule
  ],
  declarations: [ FooterComponent ],
  exports: [ FooterComponent]
})
export class CoreModule { }
