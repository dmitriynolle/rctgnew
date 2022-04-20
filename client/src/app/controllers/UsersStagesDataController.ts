import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {path} from "./Constants";

@Injectable({providedIn: 'root'})
export class UsersStagesDataController {

  constructor(private http: HttpClient) {
  }

  getUsersStagesData(stageId: number, userId: number) {
    return this.http.get(path + 'users_stages_data?stage_id=' + stageId + '&user_id=' + userId);
  }

}
