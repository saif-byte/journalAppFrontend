import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    let userData = this.loginForm.value;
    this.httpService.login(userData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('userToken', res.jwtToken);
        localStorage.setItem('userName', res.userName);

        alert('Login Successful! ✅');
        this.router.navigate(['/home']);
      },
      (error) => {
        alert('Invalid Credentials! ❌');
      }
    );
  }
}
