import {Component} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

@Component({
template: `

<h5>Radio Button</h5>

<h6>(Only for reactive forms)</h6>
<form [formGroup]="form2" (ngSubmit)="onSubmit2()">
  <p><ml-radio id="radio3" formControlName="options" value="option3" ripple>Option 3 (ripple)</ml-radio></p>
  <p><ml-radio id="radio4" formControlName="options" value="option4">Option 4 (no ripple)</ml-radio></p>
  <p><ml-radio id="radio5" formControlName="options" value="option5" disabled>Option 5 (disabled)</ml-radio></p>
  <p><ml-button-submit aspect="raised" value="Submit to console"></ml-button-submit></p>
</form>
<br>
<debug-form [name]="form2"></debug-form>


`//template
})
export class PageRadio {

  model_1 = 'option1';

  // model for reactive form2
  form2: FormGroup;
  options = new FormControl('option3');

  ngOnInit(){
    this.form2 = new FormGroup({
      options: this.options
    })
  }

  onSubmit1(form){
    console.log(form.value);
  }

  onSubmit2(){
    console.log(this.form2.value);
  }

}