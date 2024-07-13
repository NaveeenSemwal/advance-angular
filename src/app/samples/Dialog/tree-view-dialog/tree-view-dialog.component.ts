import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tree-view-dialog',
  templateUrl: './tree-view-dialog.component.html',
  styleUrls: ['./tree-view-dialog.component.css']
})
export class TreeViewDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
