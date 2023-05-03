import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthUser {
  constructor(private jwtHelper: JwtHelperService) {}

  isUserAuthenticated() {
    var token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) return true;
    return false;
  }
  getRole() {
    var token = localStorage.getItem('token');
    if (token) {
      var payload = this.getDecodedAccessToken(token);

      return payload.Role;
    }
    return 'No token!';
  }
  getId(){
    var token = localStorage.getItem('token');
    if (token) {
      var payload = this.getDecodedAccessToken(token);

      return payload.Id;
    }
    return 'No token!';
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      //need to be changed
      return null;
    }
  }
  isAuthorized(route: ActivatedRouteSnapshot): boolean {
    return this.checkRole(this.getRole(), route.data.expectedRoles);
  }
  
  checkRole(userRole: string, roles: string[]) {
    const roleMatches = roles.indexOf(userRole);
    if (roleMatches < 0) return false;
    return true;
  }
  createHeader(){
    var tokenHeader = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return tokenHeader;
  }
}
