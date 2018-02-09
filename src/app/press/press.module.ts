import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PressRoutingModule } from './press-routing.module';
import { PressComponent } from './press.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PressRoutingModule
  ],
  declarations: [PressComponent]
})
export class PressModule { }
