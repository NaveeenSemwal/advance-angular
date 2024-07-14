import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { Name, Person } from '../person-data.model';

@Component({
  selector: 'app-tree-view-dialog',
  templateUrl: './tree-view-dialog.component.html',
  styleUrls: ['./tree-view-dialog.component.css']
})
export class TreeViewDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  @Input() personData: Person = {
    name: {
      first: 'Alicia',
      last: 'Turret',
    },
    phone: '123-456-7890',
  };
  nameData: Name;

  captureNameData(event){
    this.nameData = event;
  }
 
}
