import { Directive } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[emailValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidatorDirective,
        multi: true
       }]
})
export class EmailValidatorDirective implements Validator {
    validate(control: FormControl) {
        const emailRegexp =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        const valid = emailRegexp.test(control.value);
        return valid ? null : {invalidEmail : true};
    }
    // Add your code here
}
