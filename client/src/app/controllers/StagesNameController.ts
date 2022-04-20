import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {path} from './Constants';

@Injectable({providedIn: 'root'})
export class StagesNameController {

  constructor(private http: HttpClient) {
  }

  getStagesName() {
    return this.http.get(path + 'stages_name');
  }

}
