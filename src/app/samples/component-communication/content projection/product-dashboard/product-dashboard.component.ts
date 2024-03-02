import { Component } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {

public salesProduct = [

  {Id : 1, Name : 'Sony TV', Price : 10000},
  {Id : 2, Name : 'LG Fridge', Price : 20000},
  {Id : 3, Name : 'Bosh Washing Machine', Price : 30000},

];


public topProduct = [

  {Id : 1, Name : 'Sony TV', Price : 10000},
  {Id : 2, Name : 'LG Fridge', Price : 20000},
  {Id : 3, Name : 'Bosh Washing Machine', Price : 30000},

];



}
