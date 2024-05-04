import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CustomValidators } from 'src/app/validatiors/custom.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;

  /**
   *
   */
  constructor(private userService : UserService) {
 
    
  }

  ngOnInit(): void {
    
    this.reactiveForm = new FormGroup({

      firstname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
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
       ]),
       experiences : new FormArray([])
    })


   
      //   this.userService.checkIfUsernameExists('Batman').subscribe({
      //   next : x=> console.log('Result  '+ x),
      //   error(err) {
      //     console.log('err  '+ err)
      //   },
      //   complete() {
      //     console.log('Completed')
      //   },
      // }
      
      // );
       
  }

  get skills() : FormArray {
    return this.reactiveForm.get("skills") as FormArray
  }

  get experiences() : FormArray {
    return this.reactiveForm.get("experiences") as FormArray
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

  addExperiences(){

    const frmGroup = new FormGroup({
      company: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      totalExp: new FormControl(1, [Validators.required, CustomValidators.validateNumericValue]),
      start: new FormControl(null , Validators.required),
      end: new FormControl(null),

     },CustomValidators.dateRange('start','end'));

      this.experiences.push(frmGroup);

  }

  removeExperience(index : number){
    this.experiences.removeAt(index);
    }
}
