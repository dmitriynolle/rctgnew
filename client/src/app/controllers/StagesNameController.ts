import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class StagesNameController {
  // path = 'http://rctrophy.ru/api/';
  path = 'http://localhost:8080/'

  constructor(private http: HttpClient) {
  }

  getStagesName() {
    return this.http.get(this.path + 'stages_name');
  }

}
