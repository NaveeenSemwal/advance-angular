import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TreeViewDialogComponent } from './samples/Dialog/tree-view-dialog/tree-view-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Advance';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TreeViewDialogComponent, {
      // disableClose: true,
      //       width: '60%',
      //       maxWidth: '60%',
      //       // height: '90%',
      //       maxHeight: '90%',
      data: {
        animal: 'panda',
      },
    });
}
}
