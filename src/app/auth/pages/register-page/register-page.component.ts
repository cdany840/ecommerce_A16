import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  get name(){
    return this.registerForm.get('name') as FormControl;
  }

  get email(){
    return this.registerForm.get('email') as FormControl;
  }

  get password(){
    return this.registerForm.get('password') as FormControl;
  }

  registerForm = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'name': ['', [Validators.required]],
    'password': ['',[ Validators.required, Validators.minLength(6)]]
  });

  register() {
    const email = this.registerForm.get('email')?.value;
    const name = this.registerForm.get('name')?.value;
    const password = this.registerForm.get('password')?.value;

    if (email && name && password) {
      this.authService.register(email, password, name)
        .subscribe({
          next: () => this.router.navigateByUrl('auth/login'),
          error: (message: any) => {
            console.log(message)
          }
        })
    }else{
      this.registerForm.reset();
    }
  }

}
