import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LinkTreeComponent } from './components/link-tree/link-tree.component';
import { PocPageComponent } from './pages/poc-page/poc-page.component';
import { PocRoutingModule } from './poc-routing.module';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PocPageComponent,
    LinkTreeComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
    SharedModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class PocModule { }
