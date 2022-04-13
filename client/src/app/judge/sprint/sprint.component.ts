import {Component, OnInit} from '@angular/core';
import {NameGames} from '../../data/user.model';
import {Repository} from '../../data/repository';
import {EtapView} from '../../data/registration';
import {Subscription, timer} from 'rxjs';
import {StagesNameController} from "../../data/controllers/StagesNameController";

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  nameGames: Array<NameGames> = [];
  nameGame: Array<NameGames> = [];
  nameUsers: Array<EtapView> = [];
  nameUser: Array<EtapView> = [];
  usersStart: Array<EtapView> = [];
  gameId = 0;
  userName = '0';
  timer: Subscription;
  allSec: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  timerIndex: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  timerInit = 0;
  min = 0;

  constructor(private repository: Repository,
              private stagesNameController: StagesNameController) {
  }

  ngOnInit(): void {
    this.stagesNameController.getStagesName().subscribe((res: any[]) => {
      this.nameGames = res;
      this.changeGame();
    });
  }

  private changeGame() {
    if (this.gameId != 0) {
      this.nameGame = this.nameGames.filter(res => this.gameId == res.id);
      this.repository.getSelectUsers(this.nameGame[0].id).subscribe((res: any[]) => this.nameUsers = res);
    } else {
      this.nameUsers.length = 0;
    }
  }

  changeUser() {
    if (this.userName != '0') {
      this.nameUser = this.nameUsers.filter(res => this.userName == res.username);
      for (let i = 0; i < this.usersStart.length; i++) {
        if (this.nameUser[0].id == this.usersStart[i].id) {
          this.userName = '0';
          break;
        }
      }
    }
  }

  addUser() {
    this.usersStart.push(this.nameUser[0]);
    this.userName = '0';
  }

  onTimer(index: number) {
    if (this.timerIndex[index] == 0) {
      this.timerIndex[index] = 1;
      this.usersStart[index].summa = 0;
    } else {
      this.timerIndex[index] = 0;
      this.usersStart[index].timesu1 = this.allSec[index];
    }
    if (this.timerInit == 0) {
      this.timer = timer(1, 1000).subscribe(t => {
        for (let i = 0; i < 10; i++) {
          if (this.timerIndex[i] == 1) this.allSec[i]++;
        }
      });
    }
    this.timerInit = 1;
  }

  ofTimer(i: number) {
    this.timer.unsubscribe();

  }

  saveEtap() {
    console.log (this.usersStart);
    this.repository.saveSprint(this.usersStart).subscribe(rec => {
      this.usersStart.length = 0;
      this.timer.unsubscribe();
    });
  }

  DNF(i: number) {
    this.usersStart[i].summa = 400;
    this.allSec[i] = 0;
    this.timerIndex[i] = 0;
  }
}
