import { FormControl } from "@angular/forms";




export class CustomValidators
{
   static noSpaceAllowed(formControl : FormControl) {

        if (formControl.value !== null && formControl.value.indexOf(' ') != -1) {
            
            return {noSpaceAllowed : true};
        }
        return null;
    }
}