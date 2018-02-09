import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from '../about/about.module';
import { PressModule } from '../press/press.module';

@NgModule({
  imports: [
    CommonModule,
    AboutModule,
    PressModule
  ],
  declarations: []
})
export class CoreModule { }
