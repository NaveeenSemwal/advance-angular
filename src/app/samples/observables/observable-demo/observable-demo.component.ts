import { Component } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  data : any[] = [];


// This is Observable and it will emit the data using next function. 
// observer is the subscriber. Whoso ever has subscribed to it will receive an update
 myObservable = new  Observable((observer)=>{
   //observer.next([1,2,3,4,5]);   It is returning an single data at once

   // Below is like streaming of data as we are calling multiple next method.
   // Added setTimeout to simulate if it is coming from Network

   setTimeout(() => {
    observer.next(1);
   }, 1000);


   setTimeout(() => {
    observer.next(2);
   }, 2000);

   setTimeout(() => {
    observer.next(3);
   }, 3000);

   setTimeout(() => {
    observer.next(4);
   }, 4000);
   setTimeout(() => {
    observer.next(5);
   }, 5000);


 });

 getData(){

  // This is the subscriber.
  // next, error, complete - Optional Handler
  this.myObservable.subscribe((x:any) =>{

    this.data.push(x);
  })

 }

}
