import { Component, OnInit, DoCheck } from '@angular/core';
import { UserInfo } from '../types/user-info.type';
import { Router } from "@angular/router"
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'bkl-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements DoCheck {

  isUserLoggedIn: boolean;
  nickname: string;
  isAdmin: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngDoCheck() {
    this.isUserLoggedIn = !!localStorage.getItem('userInfo');
    if (this.isUserLoggedIn) {
      const userInfo: UserInfo = JSON.parse(localStorage.getItem('userInfo'));
      this.nickname = userInfo.nickname;
      this.isAdmin = userInfo.role == 'Admin';
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToCollection() {
    this.router.navigate(['/collection']);
  }

  redirectToAdmin() {
    this.router.navigate(['/admin']);
  }

  redirectToAdminAdd() {
    this.router.navigate(['/admin-add']);
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/']);

    // const userInfo: UserInfo = JSON.parse(localStorage.getItem('userInfo'));
    // const accessToken = userInfo.accessToken;
    // console.log(accessToken);
    // this.authenticationService.logout(accessToken)
    //   .subscribe(
    //     () => {
    //       console.log('logout success');
    //       localStorage.removeItem('userInfo');
    //       this.router.navigate(['/']);
    //     },
    //     (err) => {
    //       console.log('logout error:');
    //       console.log(err);
    //     } 
    //   );
  }
}
