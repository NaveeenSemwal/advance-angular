import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent {


    @ViewChild('inputElement') inputViewChildElement : ElementRef;
    @ViewChildren('inputElement') inputViewChildrenElements : QueryList<ElementRef>;

    fullName : string;

    show(){


      let name : string = '';

      console.log(this.inputViewChildElement.nativeElement.value)


      this.inputViewChildrenElements.forEach(element => {
        
        name += element.nativeElement.value + ' ' ;
        
      });
       this.fullName = name.trim();

       console.log(this.fullName)
    }
}
