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
}
