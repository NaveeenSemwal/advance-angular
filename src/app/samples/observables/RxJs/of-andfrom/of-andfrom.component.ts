import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-of-andfrom',
  templateUrl: './of-andfrom.component.html',
  styleUrls: ['./of-andfrom.component.css']
})
export class OfANDfromComponent  {

  data : any[] = [];


   array1 = [1,2,3,4,5];

   array2 = ['A','B','C'];

   // of Operator creates Observable from list of arguments that we pass into it. Each argument is emitted one after another 
   // myObservable$ = of(this.array1, this.array2);

   // from opertaor takes single iterable item as input and convert it into observable.
   // myObservable$ = from(this.array1);

   // Note - String value is Iterable
   myObservable$ = from('12345678');
   
   // **** from operator also used to convert promise to Observable  ******************

 getData(){

  // This is the subscriber.
  // next - We use Arrow function syntax to access data property using this keyword. Without this outer data variable wonn't be accessible
  this.myObservable$.subscribe({
        next : (value : any) => {
          this.data.push(value);
        },
        error(err) {
          alert(err.message);
        },
        complete() {
          alert("Process Completed");
        }

   
  })

 }

}
