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

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

// @Injectable()
// export class AuthService {

//   constructor(private http: Http) {}

//   login(credentials) {
//     this.http.post('http://localhost:4200/login', credentials)
//       .map(res => res.json())
//       .subscribe(
//         // We're assuming the response will be an object
//         // with the JWT on an id_token key
//         data => localStorage.setItem('id_token', data.id_token),
//         error => console.log(error)
//       );
//   }
// }