import {Component, OnInit} from '@angular/core';
import {Repository} from '../../data/repository';
import {NameGames, UserModel} from '../../data/user.model';
import {Etap} from '../../data/registration';
import {ShtrafBall} from '../../data/shtraf';
import {sortBy} from "sort-by-typescript";
import {StagesNameController} from "../../controllers/StagesNameController";

@Component({
  selector: 'app-org',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  nameGames: Array<NameGames> = [];
  etap: Array<Etap> = [];
  usersEtap: Array<Etap> = [];
  nameUser: Array<UserModel> = [];
  sunumber: Array<number> = [];
  ball: Array<boolean> = [false];
  shtrafBall: Array<ShtrafBall> = [];
  gamesName = '0';
  userName = '0';
  visibleNameGames = 1;
  visibleUser = 1;
  factor: number;
  su: number;
  addEditUser = 0;
  addEditNameGames = 0;
  userNumber: number;
  users: Array<UserModel> = [];
  games: Array<NameGames> = [];
  userRegistred = 0;
  eball: Array<number> = [];

  constructor(private repository: Repository,
              private stagesNameController: StagesNameController) {
  }

  ngOnInit() {
    this.stagesNameController.getStagesName().subscribe((res: any[]) => {
      this.games = res;
    });
    this.repository.getShtrafBall().subscribe((res: any[]) => {
      this.shtrafBall = res;
    });
    this.repository.getUsers().subscribe((res: any[]) => {
      this.users = res;
      this.users = this.users.sort(sortBy('username'));
    });
  }

  setAddGames() {
    this.gamesName = "";
    this.visibleNameGames = 0;
    this.addEditNameGames = 0;
    this.ball.length = 0;
    this.su = 0;
    this.nameGames.length = 0;
    for (let i = this.shtrafBall[0].id; i < this.shtrafBall[0].id + this.shtrafBall.length; i++) {
      this.nameGames.push({
        id: null,
        namegames: this.gamesName,
        priznak: 0,
        shtrafid: i,
        su: null,
        ball: 0,
        factor: false
      });
    }
//    console.log(this.nameGames);
  }

  setAddSaveGames() {
    this.visibleNameGames = 1;
    for (let i = 0; i < this.shtrafBall.length; i++) {
      this.nameGames[i].namegames = this.gamesName;
      this.nameGames[i].su = this.shtrafBall[i].shtrafball;
    }
    this.nameGames[0].priznak = 1;
    this.nameGames[1].priznak = 1;
    this.nameGames.push({
      id: null,
      namegames: this.gamesName,
      priznak: 2,
      shtrafid: null,
      su: this.su,
      ball: 0,
      factor: false
    });
    console.log(this.nameGames);
    this.repository.saveNameGames(this.nameGames).subscribe((saveNameGames: NameGames) => {
      this.stagesNameController.getStagesName().subscribe((res: any[]) => {
        this.games = res;
        this.getSelectNameGames();
      });
    });
  }

  setEditSaveGames() {
    this.visibleNameGames = 1;
    this.addEditNameGames = 1;
    for (let i = 0; i < this.nameGames.length; i++) {
      this.nameGames[i].namegames = this.gamesName;
      this.nameGames[i].su = this.shtrafBall[i].shtrafball;
    }
    this.nameGames[0].priznak = 1;
    this.nameGames[1].priznak = 1;
    this.repository.saveNameGames(this.nameGames).subscribe((saveNameGames: NameGames) => {
      this.stagesNameController.getStagesName().subscribe((res: any[]) => {
        this.games = res;
        this.getSelectNameGames();
      });
    });
  }

  setAddUser() {
    this.userName = "";
    this.addEditUser = 0;
    this.visibleUser = 0;
    this.userNumber = null;
    this.factor = 0;
    this.nameUser.length = 0;
  }

  setAddSaveUser() {
    if (this.users.filter(rec => this.userNumber == rec.usernumber && this.factor == rec.factor).length != 0
      || this.users.filter(rec => this.userName == rec.username && this.factor == rec.factor).length != 0) {
      this.userRegistred = 3;
    } else {
      this.nameUser.push({id: null, usernumber: this.userNumber, username: this.userName, factor: this.factor});
      this.repository.saveNameUser(this.nameUser[0]).subscribe((saveNameUser: UserModel) => {
        this.repository.getUsers().subscribe((res: any[]) => {
          this.users = res;
          this.getSelectUser();
        });
      });
      this.addEditUser = 1;
      this.visibleUser = 1;
      this.userRegistred = 0;
    }
  }

  setEditSaveUser() {
    this.addEditUser = 1;
    this.visibleUser = 1;
    this.nameUser.splice(0, 1,
      {id: this.nameUser[0].id, usernumber: this.userNumber, username: this.userName, factor: this.factor});
    this.repository.saveNameUser(this.nameUser[0]).subscribe((saveNameUser: UserModel) => {
      this.repository.getUsers().subscribe((res: any[]) => {
        this.users = res;
        this.getSelectUser();
      });
    });
  }

  getSelectFactor(id: number): boolean {
    if (this.visibleUser == 1) {
      if (this.nameUser.length != 0) {
        this.factor = this.nameUser[0].factor;
        return id == this.factor;
      }
    } else {
      return id == this.factor;
    }
  }

  getSelectSu(id: number) {
    return id == this.su;
  }

  getSelectBall(id: number, sid: number) {
    if (this.ball[id] != true) {
      this.ball[id] = true;
      this.nameGames.splice(id, 1, {
        id: this.nameGames[id].id,
        namegames: this.gamesName,
        priznak: 1,
        shtrafid: sid,
        su: this.su,
        ball: this.nameGames[id].ball,
        factor: this.nameGames[id].factor
      });
    } else {
      this.ball[id] = false;
      this.nameGames.splice(id, 1, {
        id: this.nameGames[id].id,
        namegames: this.gamesName,
        priznak: 0,
        shtrafid: sid,
        su: this.su,
        ball: this.nameGames[id].ball,
        factor: this.nameGames[id].factor
      });
    }
//    console.log(this.nameGames);
  }

  getSelectNameGames() {
    if (this.gamesName == '0') {
      this.addEditNameGames = 0;
    } else {
      this.addEditNameGames = 1;
      this.repository.getGameOpis(this.gamesName).subscribe((res: any[]) => {
        this.nameGames = res;
        this.su = this.nameGames[this.nameGames.length - 1].su;
        for (let i = 0; i < this.nameGames.length - 1; i++) {
          if (this.nameGames[i].priznak == 1) {
            this.ball[i] = true;
          } else {
            this.ball[i] = false;
          }
        }
        this.repository.getGamesId(this.nameGames[this.nameGames.length - 1].id).subscribe((res: any[]) => {
          this.usersEtap = res;
          if (this.usersEtap.length != 0) {
            this.addEditNameGames = 0;
          }
        });
//        console.log(this.nameGames);
      });
    }
  }

  getSelectUser() {
    if (this.userName == '0') {
      this.addEditUser = 0;
      this.factor = 0;
      this.userNumber = null;
    } else {
      this.repository.getGamesId(this.nameGames[this.nameGames.length - 1].id).subscribe((res: any[]) => {
        this.usersEtap = res;
        this.nameUser = (this.users.filter(rec => rec.username + rec.factor == this.userName));
        if (this.usersEtap.filter(res => res.userid == this.nameUser[0].id).length != 0) {
          this.userRegistred = 1;
          this.addEditUser = 0;
        } else {
          this.userRegistred = 0;
          this.addEditUser = 1;
        }
        this.userNumber = this.nameUser[0].usernumber;
        console.log(this.nameUser);
      });
    }
  }

  getSelectNumber(userNumber: number) {
    if (this.visibleUser == 1) {
      this.repository.getGamesId(this.nameGames[this.nameGames.length - 1].id).subscribe((res: any[]) => {
        this.usersEtap = res;
        this.nameUser = this.users.filter(res => res.usernumber == userNumber);
        if (this.nameUser.length != 0) {
          if (this.usersEtap.filter(res => res.nomeruser == userNumber).length != 0) {
            this.userRegistred = 1;
            this.addEditUser = 0;
          } else {
            this.userRegistred = 0;
            this.addEditUser = 1;
          }
          this.userName = this.nameUser[0].username;
          this.factor = this.nameUser[0].factor;
        } else {
          this.userRegistred = 2;
          this.nameUser.length = 0;
          this.factor = 0;
          this.userName = '';
          this.addEditUser = 0;
        }
        console.log(this.nameUser);
      });
    }
  }

  saveEtap() {
    for (let i = 0; i < 5; i++) {
      if (i <= this.nameGames[this.nameGames.length - 1].su - 1) {
        this.sunumber[i] = 10000;
      } else {
        this.sunumber[i] = 0;
      }
    }
    this.etap.push({
      id: null,
      gameid: this.nameGames[this.nameGames.length - 1].id,
      nomeruser: this.userNumber,
      userid: this.nameUser[0].id,
      factoruser: this.factor,
      su1: this.sunumber[0],
      su2: this.sunumber[1],
      su3: this.sunumber[2],
      su4: this.sunumber[3],
      su5: this.sunumber[4],
      timesu1: null,
      timesu2: null,
      timesu3: null,
      timesu4: null,
      timesu5: null,
      time: null,
      summa: 10000 * this.nameGames[this.nameGames.length - 1].su
    });
    console.log(this.etap[0]);
    this.repository.saveEtap(this.etap[0]).subscribe();
    this.addEditNameGames = 0;
    this.etap.length = 0;
    this.sunumber.length = 0;
    this.nameUser.length = 0;
    this.addEditUser = 0;
    this.userName = null;
    this.userNumber = null;
  }
}
