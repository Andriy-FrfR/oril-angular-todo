import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'),
    ]),
    address: new FormControl(null, [Validators.required]),
    suite: new FormControl(null),
    city: new FormControl(null, [Validators.required]),
    zipcode: new FormControl(null, [
      Validators.required,
      Validators.pattern('[0-9]{5}'),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get('name');
  }

  get username() {
    return this.signUpForm.get('username');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get phone() {
    return this.signUpForm.get('phone');
  }

  get address() {
    return this.signUpForm.get('address');
  }

  get suite() {
    return this.signUpForm.get('suite');
  }

  get city() {
    return this.signUpForm.get('city');
  }

  get zipcode() {
    return this.signUpForm.get('zipcode');
  }
}
