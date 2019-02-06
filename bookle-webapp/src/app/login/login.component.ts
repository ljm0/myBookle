import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../types/customer.type';

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
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.email, this.password)
      .subscribe(
        (data) => {
          this.customerService.getCustomerById(data.userId)
            .subscribe(
              (customer: Customer) => {
                localStorage.setItem('userInfo', JSON.stringify({
                  id: customer.id,
                  nickname: customer.nickname,
                  collectionId: customer.collection.id,
                  accessToken: data.id,
                  role: customer.role
                }));
                this.router.navigate(['/']);
              }
            )
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
