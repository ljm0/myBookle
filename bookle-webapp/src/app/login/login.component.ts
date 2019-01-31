import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bkl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  message: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.email, this.password)
      .subscribe(
        (data) => {
          localStorage.setItem('userInfo', JSON.stringify({
            nickname: 'Dasein',
            accessToken: data.id,
            role: 'Admin'
          }));
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
          this.message = 'login failed.';
        }
      );
  }

  redirectToRegistration() {
    this.router.navigate(['/registration']);
  }
}
