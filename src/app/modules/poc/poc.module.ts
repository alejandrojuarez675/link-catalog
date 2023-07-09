import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LinkTreeComponent } from './components/link-tree/link-tree.component';
import { PocPageComponent } from './pages/poc-page/poc-page.component';
import { PocRoutingModule } from './poc-routing.module';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { LinkChipComponent } from './components/link-chip/link-chip.component';

@NgModule({
  declarations: [
    PocPageComponent,
    LinkTreeComponent,
    LinkChipComponent
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
    SharedModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ]
})
export class PocModule { }
