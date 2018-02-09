import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressRoutingModule } from './press-routing.module';
import { PressComponent } from './press.component';

@NgModule({
  imports: [
    CommonModule,
    PressRoutingModule
  ],
  declarations: [PressComponent]
})
export class PressModule { }
