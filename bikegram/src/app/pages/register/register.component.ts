import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessageName() {
    return this.name.hasError('required') ? 'You must enter a valid name' :
      this.name.hasError('name') ? 'Not a valid name' :
        '';
  }

 
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a valid email' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';

  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'You must enter a valid password' :
      this.password.hasError('password') ? 'Not a valid password' :
        '';

  }
}
