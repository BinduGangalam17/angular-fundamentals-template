import { Directive, Input } from "@angular/core";
import { AbstractControl, EmailValidator, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[emailValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidatorDirective,
        multi: true,
       }]
})
export class EmailValidatorDirective implements Validator {
    @Input('emailValidator') emailValidator = '';
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const emailRegexp = new RegExp(' /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i');

        let valid = emailRegexp.test(control.value);

        return valid ? null : {invalidEmail:true};
        
        // if (!answer) {
        // return { 'validateEmail': true }
        // }

        //return null;
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }
    // Add your code here
}
