import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../ManageServe/custom/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  constructor(private formBuilder: FormBuilder,
             private userService: UserService,
             private router: Router
    ) {}

  registerForm: FormGroup;
  loading = false;

  ngOnInit() {
    this.formInitializer();
  }

  save() {
    this.loading = true;

    this.userService.userRegister(this.registerForm.value).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
        this.router.navigateByUrl('/home-categories');
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }

  formInitializer() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirm_password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          this.matchOtherValidator('password')
        ]
      ]
    });
  }


  // this funtion compare the password with confirm passsword
  // if not matches, confirm password lines remain red
  matchOtherValidator(otherControlName: string) {
    return (control: AbstractControl): { [key: string]: any } => {
      const otherControl: AbstractControl = control.root.get(otherControlName);

      if (otherControl) {
        const subscription: Subscription = otherControl.valueChanges.subscribe(
          () => {
            control.updateValueAndValidity();
            subscription.unsubscribe();
          }
        );
      }

      return otherControl && control.value !== otherControl.value
        ? { match: true }
        : null;
    };
  }
}
