import { User } from './../../interfaces/user.interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnDestroy {
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

  sub!: Subscription;

  constructor(private authServ: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const userData: User = {
      name: this.name?.value,
      username: this.username?.value,
      email: this.email?.value,
      phone: this.phone?.value,
      address: {
        street: this.address?.value,
        suite: this.suite?.value,
        city: this.city?.value,
        zipcode: this.zipcode?.value,
      },
    };

    this.sub = this.authServ
      .signUp(userData)
      .subscribe(() => this.router.navigate(['/todo']));
  }

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
