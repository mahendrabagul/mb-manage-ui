import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {TokenService} from 'src/app/services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  title: 'Mb Manage | MB Manage Pvt. Ltd.';

  constructor(private router: Router, private authService: AuthService, private tokenService: TokenService) {
  }

  ngOnInit() {
  }


  isLoggedIn() {
    this.username = this.tokenService.getUserNameFromToken();
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    return this.tokenService.isAdmin();
  }

  isClerk() {
    return this.tokenService.isClerk();
  }

  isSenior() {
    return this.tokenService.isSenior();
  }

  onLogout(): void {
    this.authService.logout();
  }

}
