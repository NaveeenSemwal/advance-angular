import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;

  ngOnInit(): void {
    
    this.reactiveForm = new FormGroup({

      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      street: new FormControl(null),
      country: new FormControl('India'),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null)
    })

  }


  OnRegister(){

    console.log(this.reactiveForm);

  }



}
