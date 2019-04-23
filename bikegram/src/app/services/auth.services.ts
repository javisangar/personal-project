import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

  user: any;

  constructor(private http: HttpClient) {}

  set token(value: string) {
    window.localStorage.token = value;
  }

  get token() {
    return window.localStorage.token;
  }

  login(data) {
    return this.http.post(`${environment.apiUrl}/auth/sign-in`, data).toPromise().then((res: any) => {
      if (res.token) {
        this.token = res.token;
      }
    }).then(res => {
      return this.getUser();
    });
  }

  getUser(): Promise<object>  {
    return this.http.get(`${environment.apiUrl}/me`).toPromise().then(user => {
      this.user = user;
      return user;
    });
  }

  register(data: any, token: any) {
    return this.http.post(`${environment.apiUrl}/auth/sign-up`, data).toPromise().then((res: any) => {
      if (res.token) {
        this.token = res.token;
      }
    });
  }

}
