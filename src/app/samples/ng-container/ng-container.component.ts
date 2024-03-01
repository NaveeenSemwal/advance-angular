import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent {

  items= [
    { name:'Angular', active:true},
    { name:'React', active:true},
    { name:'Typescript', active:true},
    { name:'FoxPro', active:false},
    { name:'Javascript', active:true},
    { name:'ASP.NET Core', active:true},
    { name:'DBase', active:false}
  ]


  value : number = 1 ;

}
