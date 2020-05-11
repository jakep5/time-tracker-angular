import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true}
  ]
})
export class EqualValidator implements Validator{

  constructor( @Attribute('validateEqual') public validateEqual: string,
  @Attribute('reverse') public reverse:string) {
  }

  private get isReverse() {
    if (!this.reverse) return false;

    return this.reverse === 'true' ? true : false;
  }

  validate(c: AbstractControl): { [key: string]: any} { //Validator interface expects validate() function
    let v = c.value; //v is set equal to confirmPassword.value

    let e = c.root.get(this.validateEqual); //set to control value (password.value)

    //values are not equal
    if (e && v !== e.value && !this.reverse) {
      return {
        validateEqual: false
      }
    }

    //values are equal AND reverse
    if (e && v === e.value && this.isReverse) {
      delete e.errors['validateEqual'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    //values NOT equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({ validateEqual: false });
    }

    return null;
  }
}
