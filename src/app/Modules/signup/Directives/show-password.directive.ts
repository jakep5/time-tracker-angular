import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective {

  constructor(private element: ElementRef) { 
    this.setup();
  }

  private shown: Boolean = false;
  private parentNode: HTMLElement;

  toggle(span: HTMLElement) {
    this.shown = !this.shown;

    //toggle to 'Hide password/Hide confirm password' if 'show' is clicked
    if (this.shown) {
      this.element.nativeElement.setAttribute('type', 'text');
      if (this.parentNode.firstChild.textContent === 'Password') {
        span.innerHTML = 'Hide password';
      } else {
        span.innerHTML = 'Hide confirm password';
      }
      
    //toggle to 'Show password/Show confirm password if 'hide' is clicked
    } else {
      this.element.nativeElement.setAttribute('type', 'password');
      if (this.parentNode.firstChild.textContent === 'Password') {
        span.innerHTML = 'Show password'
      } else {
      span.innerHTML = 'Show confirm password';
      }
    }
  }

  setup() {
    const parent = this.element.nativeElement.parentNode;
    this.parentNode = parent;
    const span = document.createElement('span');
    span.className = "showPassword";

    //Toggle between 'Show password' and 'Show confirm password' depending on which input
    if (this.parentNode.firstChild.textContent === 'Password') {
      span.innerHTML = 'Show password';
    } else {
      span.innerHTML = 'Show confirm password';
    }
    span.addEventListener('click', (event) => {
      this.toggle(span);
    })
    parent.appendChild(span);
  }

}
