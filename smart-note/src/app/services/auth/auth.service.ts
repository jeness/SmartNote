import { Injectable } from '@angular/core';
import { SessionService } from '../session/session.service';

@Injectable()
export class AuthService {

  constructor(
    private session: SessionService,
  ) {
  }

  public isLoggedIn() {
    return !!this.session.accessToken;
  }

  public doLogOut() {
    this.session.destroy();
  }

  public doLogIn(accessToken: string, name: string) {
    if ((!accessToken) || (!name)) {
      return;
    }
    this.session.accessToken = accessToken;
    this.session.name = name;
  }
}