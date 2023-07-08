import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocRoutingModule } from './poc-routing.module';
import { PocPageComponent } from './pages/poc-page/poc-page.component';



@NgModule({
  declarations: [
    PocPageComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
  ]
})
export class PocModule { }
