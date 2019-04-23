import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  myForm: FormGroup;
  showError = false;
  
 

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }

  getErrorMessageEmail() {
    return this.myForm.controls.email.hasError('required') ? 'You must enter a value' :
    this.myForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';

  }

  getErrorMessagePassword() {
    return this.myForm.controls.password.hasError('required') ? 'You must enter a value' :
    this.myForm.controls.password.hasError('password') ? 'Not a valid password' :
        '';

  }

  submit() {
    if (this.myForm.valid) {
      this.authService.login(this.myForm.value).then(
        response => {
          this.router.navigate(['app', 'mode']);
        },
        err => {
          this.showError = true;
        }
      );
    }
  }
}
