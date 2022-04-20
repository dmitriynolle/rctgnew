import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersLogin, UsersRegister} from "../entities/Users";
import {path} from "./Constants";

@Injectable({providedIn: 'root'})
export class AuthorizationController {

  constructor(private http: HttpClient) {
  }

  registerUser(user: UsersRegister) {
    return this.http.post(path + 'public/register', user);
  }

  loginUser(user: UsersLogin) {
    return this.http.post(path + 'public/auth', user);
  }

}
