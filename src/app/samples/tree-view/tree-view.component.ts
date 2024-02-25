
import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Component Communication/ Content Projection',
    children: [
      {name: 'Input/Output Property'},
      {name: 'View Child/Children'},
      {name: 'Ng Content'}],
  },
  {
    name: 'Directive',
    children: [
      {
        name: 'In build Directive',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Custom Directive',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
