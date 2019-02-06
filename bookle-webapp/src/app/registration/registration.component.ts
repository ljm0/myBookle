import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'bkl-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  nickname: string;
  email: string;
  password: string;
  password_cfm: string;
  message: string;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onRegister() {
    this.message = null;

    if (this.nickname && this.email && this.password && this.password_cfm) {
      if (this.password !== this.password_cfm) {
        this.message = 'please confirm your password!';
      } else {
        this.authenticationService.register(this.email, this.password, this.nickname)
          .subscribe(
            (response) => {
              console.log(response);
              this.nickname = this.email = this.password = this.password_cfm = null;
              this.message = 'successfully registered! please login';
            },
            (err) => {
              console.log(err);
              this.message = 'email already registered';
            }
          )
      }
    } else {
      this.message = 'please fill all the fields!';
    }
  }

}
