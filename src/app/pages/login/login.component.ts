import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../services';
import { AuthService } from '../../core/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    loginForm: FormGroup;
    errorMessage: string = '';
    returnUrl;
    constructor(
        public authService: AuthService,
        private router: Router,
        private fb: FormBuilder
      ) {
        this.createForm();
      }

    ngOnInit() {
		
		
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    createForm() {
        this.loginForm = this.fb.group({
          email: ['', Validators.required ],
          password: ['',Validators.required]
        });
      }
    
      tryFacebookLogin(){
        this.authService.doFacebookLogin()
        .then(res => {
          this.router.navigate(['/pages/landing']);
        })
      }
    
      tryTwitterLogin(){
        this.authService.doTwitterLogin()
        .then(res => {
          this.router.navigate(['/pages/landing']);
        })
      }
    
      tryGoogleLogin(){
        this.authService.doGoogleLogin()
        .then(res => {
          this.router.navigate(['/pages/landing']);
        })
      }
    
      tryLogin(value){
        this.authService.doLogin(value)
        .then(res => {
          this.router.navigate(['/pages/landing']);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
        })
      }	
	
}
