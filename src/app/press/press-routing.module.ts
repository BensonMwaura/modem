import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PressComponent } from './press.component';

const routes: Routes = [
  { path: 'press', component: PressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PressRoutingModule { }
