import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { treeExample } from 'src/app/core/mocks/tree-example';
import { LinkNode } from 'src/app/shared/models/dashboard';

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  url: string | null;
}

@Component({
  selector: 'app-link-tree',
  templateUrl: './link-tree.component.html',
  styleUrls: ['./link-tree.component.sass']
})
export class LinkTreeComponent {

  private _transformer = (node: LinkNode, level: number) => {
    return {
      expandable: !!node.nodes && node.nodes.length > 0,
      name: node.title,
      level: level,
      url: node.link,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.nodes,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = treeExample.data.nodes;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
