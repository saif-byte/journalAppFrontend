import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }
    let userData = this.signupForm.value;
    this.httpService.signup(userData).subscribe(
      (res) => {
        console.log(res);
        alert('Signup Successful! ✅');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Signup Failed ❌');
      }
    );
  }
}
