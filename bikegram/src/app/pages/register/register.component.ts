import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.services';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {
  myForm: FormGroup;
  showError = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required
      ]),
      'name': new FormControl('', [
        Validators.required
      ]),'location': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }

  getErrorMessageName() {
    return this.myForm.controls.name.hasError('required') ? 'You must enter a valid name' :
      this.myForm.controls.name.hasError('name') ? 'Not a valid name' :
        '';
  }
  getErrorMessageLocation() {
    return this.myForm.controls.name.hasError('required') ? 'You must enter a valid location' :
      this.myForm.controls.location.hasError('location') ? 'Not a valid location' :
        '';
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
      this.authService.register(this.myForm.value, this.activatedRoute.snapshot.params.token).then(
        response => {
          this.showError = false;
          this.router.navigate(['login']);
        },
        err => {
          this.showError = true;
        }
      );
    }
  }
}
