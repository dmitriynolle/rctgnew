import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from "../data/user.model";
import {UsersLogin, UsersRegister} from "../entities/Users";

@Injectable({providedIn: 'root'})
export class AuthorizationController {
  // path = 'http://rctrophy.ru/api/';
  path = 'http://localhost:8080/'

  constructor(private http: HttpClient) {
  }

  registerUser(user: UsersRegister) {
    return this.http.post(this.path + 'all/register', user);
  }

  loginUser(user: UsersLogin) {
    return this.http.post(this.path + 'all/auth', user);
  }

}
