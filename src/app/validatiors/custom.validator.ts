import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Observable, map, switchMap, timer } from "rxjs";

export class CustomValidators
{
   static noSpaceAllowed(formControl : FormControl) : ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
        if (formControl.value !== null && formControl.value.indexOf(' ') != -1) {
            
            return {noSpaceAllowed : true};
        }
        return null;
    }
   }

    static dateRange(startDate : string, endDate : string): ValidatorFn {
       return (group: FormGroup): ValidationErrors | null => {
    
        if (group.get(startDate).value === null ||  group.get(endDate).value === null){
           return null;
        }

        const from  =  group.get(startDate).value;
        const to  =  group.get(endDate).value;
        let invalid = false;

        if (from && to) {
            invalid = new Date(from).valueOf() >= new Date(to).valueOf();
          }
          return invalid ? { dateRange: true } : null;
    };
  }

   static validateNumericValue(control : FormControl): { [key: string]: any; }{
      let isValid = control.value > 0;
      if (isValid) 
      {return null;} else {return { 'numericValueCheck': true };}
    }

    // Async Validator is Pending.
    static createValidator(userService: UserService): AsyncValidatorFn {
      
        return (control: AbstractControl) => {
          return timer(500).pipe(
              switchMap(() =>
              userService.checkIfUsernameExists(control.value)
                  .pipe(map((result: boolean) => result ? {asyncInvalid: true} : null)))
          );
      };
    }

}


