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
       // throw new Error("Method not implemented.");
        const emailRegexp = new RegExp('^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$');

        let answer = emailRegexp.test(control.value);
        
        if (!answer) {
        return { 'validateEmail': true }
        }

        return null;
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }
    // Add your code here
}
