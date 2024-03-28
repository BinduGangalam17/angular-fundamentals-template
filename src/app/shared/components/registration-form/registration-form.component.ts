import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  // Use the names `name`, `email`, `password` for the form controls.
  // form = {
  //   name:'',
  //   email: '',
  //   password: ''
  // };

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name:new FormControl("",[Validators.required, Validators.minLength(6)]),
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    })
  }

  onSubmit()
  {
    if (this.registrationForm.invalid) {
      console.log('invalid')
      return;
    }
    console.log(this.registrationForm.value);
  }
}
