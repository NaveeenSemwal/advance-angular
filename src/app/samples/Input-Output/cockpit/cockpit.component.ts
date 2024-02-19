import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
   styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ name: string, content: string }>();

  onAddServer() {
    this.serverCreated.emit({ name: this.newServerName, content: this.newServerContent });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({ name: this.newServerName, content: this.newServerContent });
  }

}
