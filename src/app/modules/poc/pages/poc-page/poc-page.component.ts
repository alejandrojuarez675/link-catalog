import { Component } from '@angular/core';
import { treeExample } from 'src/app/core/mocks/tree-example';
import { Dashboard } from 'src/app/shared/models/dashboard';

@Component({
  selector: 'app-poc-page',
  templateUrl: './poc-page.component.html',
  styleUrls: ['./poc-page.component.sass']
})
export class PocPageComponent {

  data: Dashboard = treeExample

}
