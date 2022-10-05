import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    fullName: new FormControl(null),
    username: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    address: new FormControl(null),
    suite: new FormControl(null),
    city: new FormControl(null),
    ZIP: new FormControl(null),
  });

  constructor() {}

  ngOnInit(): void {}
}
