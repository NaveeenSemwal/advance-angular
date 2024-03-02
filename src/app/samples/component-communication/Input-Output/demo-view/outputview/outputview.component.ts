import { Component } from '@angular/core';

@Component({
  selector: 'app-outputview',
  templateUrl: './outputview.component.html',
  styleUrls: ['./outputview.component.css']
})
export class OutputviewComponent {

  serverElements : any[] = [];

  onServerAdded(srvData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: srvData.name,
      content: srvData.content
    });
  }

  onBlueprintAdded(bluePrintData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.name,
      content: bluePrintData.content
    });
  }

}
