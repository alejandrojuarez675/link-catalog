import { Component, Input } from '@angular/core';
import { LinkNode } from 'src/app/shared/models/dashboard';

@Component({
  selector: 'app-link-tree-expantion-panel',
  templateUrl: './link-tree-expantion-panel.component.html',
  styleUrls: ['./link-tree-expantion-panel.component.sass']
})
export class LinkTreeExpantionPanelComponent {
  @Input() data!: LinkNode[];
  panelOpenState = false;

}
