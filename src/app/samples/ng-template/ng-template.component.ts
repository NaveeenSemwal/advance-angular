import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements AfterViewInit {

  @ViewChild('TemplateRefExample', { read: TemplateRef }) TemplateRefExample:TemplateRef<any>;

  selected : boolean = true;
  num : number = 0;
  constructor(private vcRef : ViewContainerRef) {
   
    
  }
  ngAfterViewInit(): void {

    this.vcRef.createEmbeddedView(this.TemplateRefExample);
  }



}
