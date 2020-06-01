import { Injectable } from '@angular/core';

import { config } from '../../../../config';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  }
  
  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''))

    return JSON.parse(jsonPayload);
  }

  getAuthToken(): string {
    return sessionStorage.getItem('time-tracker-token-key');
  }
}