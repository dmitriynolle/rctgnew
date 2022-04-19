import {Component, OnInit} from '@angular/core';
import {Repository} from '../../data/repository';
import {NameGames} from '../../data/user.model';
import {EtapView} from '../../data/registration';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {sortBy} from "sort-by-typescript";
import {StagesNameController} from "../../controllers/StagesNameController";

@Component({
  selector: 'app-home',
  templateUrl: './judge1.component.html',
  styleUrls: ['./judge1.component.scss']
})

export class Judge1Component implements OnInit {
  private subscription: Subscription;
  gameId = 0;
  userName = "0";
  userId = 0;
  nameGames: Array<NameGames> = [];
  nameGame: Array<NameGames> = [];
  nameUsers: Array<EtapView> = [];
  nameUser: Array<EtapView> = [];
  su = 0;
  factor: number;
  fakeArray: any[] = [];
  test: any;
  number: number;


  constructor(private activateRoute: ActivatedRoute, private repository: Repository, private stagesNameController: StagesNameController) {
    this.subscription = activateRoute.params.subscribe(data => {
      this.gameId = data.game;
      this.repository.getSelectUsers(this.gameId).subscribe((res: any[]) => this.nameUsers = res);
    });
  }

  ngOnInit() {
    this.stagesNameController.getStagesName().subscribe((res: any[]) => {
      this.nameGames = res;
      this.changeGame();
    });

  }

  getSelectSu(id: number) {
    return id == this.su;
  }

  changeGame() {
    if (this.gameId != 0) {
      this.nameGame = this.nameGames.filter(res => this.gameId == res.id);
      this.fakeArray = new Array(this.nameGame[0].su);
      console.log(this.fakeArray);
      this.test = 100 / this.nameGame[0].su + "%";
      this.repository.getSelectUsers(this.nameGame[0].id).subscribe((res: any[]) => {
        this.nameUsers = res;
        this.nameUsers = this.nameUsers.sort(sortBy('username'));
      });
    } else {
      this.fakeArray.length = 0;
      this.su = 0;
    }
  }

  changeUser() {
    if (this.userName != '0') {
      this.nameUser = this.nameUsers.filter(res => this.userName == res.username+res.factoruser);
      this.factor = this.nameUser[0].factoruser;
      this.number = this.nameUser[0].nomeruser;
      this.userId = this.nameUser[0].userid;
      this.fake(1);
    } else {
      this.factor = 0;
      this.number = 0;
      this.userId = 0;
      this.fake(0);
    }
  }

  selectFactor(i: number) {
    return i == this.factor;
  }

  changeNumber() {
    if (this.number != 0) {
      this.nameUser = this.nameUsers.filter(res => this.number == res.nomeruser);
      this.factor = this.nameUser[0].factoruser;
      this.userName = this.nameUser[0].username;
      this.userId = this.nameUser[0].userid;
      this.fake(1);
    } else {
      this.factor = 0;
      this.userName = '0';
      this.userId = 0;
      this.fake(0);
    }
  }

  private fake(number1: number) {
    for (let i = 0; i < this.fakeArray.length; i++) {
      if (number1 == 1) {
        if (i == 0) {this.fakeArray[0] = this.nameUser[0].su1; }
        if (i == 1) {this.fakeArray[1] = this.nameUser[0].su2; }
        if (i == 2) {this.fakeArray[2] = this.nameUser[0].su3; }
        if (i == 3) {this.fakeArray[3] = this.nameUser[0].su4; }
        if (i == 4) {this.fakeArray[4] = this.nameUser[0].su5; }
      } else {
        if (i == 0) {this.fakeArray[0] = 0; }
        if (i == 1) {this.fakeArray[1] = 0; }
        if (i == 2) {this.fakeArray[2] = 0; }
        if (i == 3) {this.fakeArray[3] = 0; }
        if (i == 4) {this.fakeArray[4] = 0; }
      }
    }
  }
}
