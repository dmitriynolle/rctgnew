import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {path} from "./Constants";
import {UsersProfile} from "../entities/Users";

@Injectable({providedIn: 'root'})
export class UsersController {

  constructor(private http: HttpClient) {
  }

  getUserProfile(username: string) {
    return this.http.get(path + 'auth/user/' + username);
  }

  saveProfileUser(user: UsersProfile) {
    return this.http.post(path + 'auth/save_profile', user);
  }

}
