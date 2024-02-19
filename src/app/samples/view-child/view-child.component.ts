import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild('hightlightKey') highlightText!: ElementRef;

  @ViewChild('counterChild') counterChild! : CounterComponent;

  constructor() { }

  // We should always access viewchild in ngAfterViewInit
  ngAfterViewInit(): void {
    console.log(this.highlightText);

    // Here we are manupulating element using viewchild
    this.highlightText.nativeElement.style.color = "red";
    this.highlightText.nativeElement.style.fontSize = "2em";
  }

  ngOnInit(): void {
  }

  inc(){
    this.counterChild.increment();
  }

  dec(){
    this.counterChild.decrement();
  }


}
