import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;

  ngOnInit(): void {
    
    this.reactiveForm = new FormGroup({

      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address : new FormGroup({
          street: new FormControl(null, Validators.required),
          country: new FormControl('India', Validators.required),
          city: new FormControl(null),
          region: new FormControl(null),
          postal: new FormControl(null, Validators.required)
       }),
       skills : new FormArray([
        new FormControl(null ,Validators.required)
       ])
    })
  }

  get skills() : FormArray {
    return this.reactiveForm.get("skills") as FormArray
  }

  OnRegister(){

    console.log(this.reactiveForm);

  }

  removeSkill(index : number){
  this.skills.removeAt(index);
  }

  addSkills(){
    this.skills.push(new FormControl(null, Validators.required))
  }

}
