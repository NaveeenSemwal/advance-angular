import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {
 
  @Input() products : any[]= [];
  constructor() {

    
  }
  ngOnInit(): void {
    
    // alert(this.products.length);
  }




}
