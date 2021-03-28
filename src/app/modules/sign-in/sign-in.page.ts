import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CoreService } from '../../core/services/core.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  signInForm: FormGroup;

  get userName(): AbstractControl { return this.signInForm.get('email'); }
  get password(): AbstractControl { return this.signInForm.get('password'); }


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onsignInFormSubmit() {
    if (!this.signInForm.valid) {
      return;
    }
    this.authService.login(this.signInForm.getRawValue()).subscribe((response: any) => {
      this.router.navigate(['/app']);
    }, (error: any) => {
      console.log('Error', error);
    }, () => {
      console.log('Logind');
    });
  }

}
