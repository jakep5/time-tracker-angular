import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true}
  ]
})
export class EqualValidator implements Validator{

  constructor( @Attribute('validateEqual') public validateEqual: string) { }

  validate(c: AbstractControl): { [key: string]: any} {
    let v = c.value; //v is set equal to confirmPassword.value

    let e = c.root.get(this.validateEqual);

    if (e && v !== e.value) return {
      validateEqual: false
    }

    return null;
  }
}
