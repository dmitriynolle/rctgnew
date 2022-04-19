import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class StagesController {
  // path = 'http://rctrophy.ru/api/';
  path = 'http://localhost:8080/'

  constructor(private http: HttpClient) {
  }

    getStageById(stagesId: number) {
    return this.http.get(this.path + 'stages/' + stagesId);
  }

}
