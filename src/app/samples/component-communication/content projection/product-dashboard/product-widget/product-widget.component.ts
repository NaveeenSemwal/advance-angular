import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit, AfterViewInit {
 
  @Input() products : any[]= [];

  // @ContentChild('head') salesHeader : ElementRef;
  @ContentChildren('head') salesHeader : QueryList<ElementRef>;

  constructor() {

  }


  ngAfterViewInit(): void {
     this.salesHeader.forEach(item =>{

      item.nativeElement.setAttribute('style','color: red');
     })
  }


  ngOnInit(): void {
    
    // alert(this.products.length);
  }




}
