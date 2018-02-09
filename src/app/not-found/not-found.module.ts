import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NotFoundComponent ]
})
export class NotFoundModule { }
