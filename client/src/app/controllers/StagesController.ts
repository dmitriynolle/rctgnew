import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {path} from "./Constants";

@Injectable({providedIn: 'root'})
export class StagesController {

  constructor(private http: HttpClient) {
  }

  getStageById(stagesId: number) {
    return this.http.get(path + 'stages/' + stagesId);
  }

}
