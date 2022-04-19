import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UsersStagesDataController {
  // path = 'http://rctrophy.ru/api/';
  path = 'http://localhost:8080/'

  constructor(private http: HttpClient) {
  }

  getUsersStagesData(stageId: number, userId: number) {
    return this.http.get(this.path + 'users_stages_data?stage_id=' + stageId + '&user_id=' + userId);
  }

}
