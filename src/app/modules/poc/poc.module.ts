import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { SharedModule } from 'src/app/shared/shared.module';
import { LinkChipComponent } from './components/link-chip/link-chip.component';
import { LinkTreeExpantionPanelComponent } from './components/link-tree-expantion-panel/link-tree-expantion-panel.component';
import { LinkTreeComponent } from './components/link-tree/link-tree.component';
import { PocPageComponent } from './pages/poc-page/poc-page.component';
import { PocRoutingModule } from './poc-routing.module';

@NgModule({
  declarations: [
    PocPageComponent,
    LinkTreeComponent,
    LinkChipComponent,
    LinkTreeExpantionPanelComponent,
  ],
  imports: [
    CommonModule,
    PocRoutingModule,
    SharedModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatExpansionModule,
  ],
})
export class PocModule {}
