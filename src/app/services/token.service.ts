import {Injectable} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {AuthToken} from '../models/authtoken';
import {Router} from '@angular/router';
import {TokenPayload} from '../models/tokenPayload';

export const TOKEN_NAME = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) {

  }

  isClerk() {
    return this.hasRole('ROLE_CLERK');
  }

  isSenior() {
    return this.hasRole('ROLE_SENIOR');
  }

  isAdmin() {
    return this.hasRole('ROLE_ADMIN');
  }

  hasRole(expectedRole: string) {
    const token = this.getToken();
    if (token !== null) {
      const tokenPayload: TokenPayload = this.decodeToken(token);
      const splittedExpectedRole = String(expectedRole).split(',');
      for (const scope of tokenPayload.scopes) {
        for (const passedScope of splittedExpectedRole) {
          {
            if (scope.authority === passedScope) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  getTenantName(): string {
    const token = this.getToken();
    if (token !== null) {
      const tokenPayload: TokenPayload = this.decodeToken(token);
      return tokenPayload.tenantName;
    }
  }

  getTenantId(): string {
    const token = this.getToken();
    if (token !== null) {
      const tokenPayload: TokenPayload = this.decodeToken(token);
      return tokenPayload.tenantId;
    }
  }

  setToken(authToken: AuthToken) {
    localStorage.setItem(TOKEN_NAME, authToken.token);
  }

  removeToken() {
    localStorage.removeItem(TOKEN_NAME);
    this.router.navigateByUrl('/login');
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  getTokenExpirationDate(token): Date {
    const tokenPayload: TokenPayload = this.decodeToken(token);
    if (tokenPayload === undefined || tokenPayload.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(tokenPayload.exp);
    return date;
  }

  decodeToken(token) {
    return jwt_decode(token);
  }

  getUserNameFromToken(): string {
    const token = this.getToken();
    if (token !== null) {
      const tokenPayload: TokenPayload = this.decodeToken(token);
      if (tokenPayload === undefined || tokenPayload.sub === undefined) {
        return null;
      }
      return tokenPayload.sub;
    } else {
      return null;
    }
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (token !== null) {
      const date = this.getTokenExpirationDate(token);
      if (date === undefined) {
        return false;
      }
      return !(date.valueOf() > new Date().valueOf());
    }
    return false;
  }

  // Temporary handled. Should be coming from server
  getTenantImage() {
    const tenantName = this.getTenantName();
    if (tenantName === 'Shri Guru Gobind Singhji Institute of Engineering and Technology') {
      return '../../../assets/tenants/sggs.jpg';
    } else if (tenantName === 'Pune Institute of Computer Technology') {
      return '../../../assets/tenants/pict.png';
    } else {
      return '../../../assets/tenants/default.png';
    }
  }
}
