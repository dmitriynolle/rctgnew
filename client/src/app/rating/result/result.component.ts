import {Component, OnInit} from '@angular/core';
import {NameGames, NameGamesView} from '../../data/user.model';
import {Repository} from '../../data/repository';
import {EtapView} from '../../data/registration';
import {sortBy} from 'sort-by-typescript';
import {UserEtapStata} from '../../data/shtraf';
import {StagesName} from "../../entities/StagesName";
import {StagesNameController} from "../../controllers/StagesNameController";
import {StagesController} from "../../controllers/StagesController";
import {Stages} from "../../entities/Stages";
import {UsersStagesDataController} from "../../controllers/UsersStagesDataController";
import {UsersSatgesData} from "../../entities/UsersSatgesData";


@Component({
  selector: 'app-org2',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  name = 0;
  stagesName: Array<StagesName> = [];
  usersSatgesData: Array<UsersSatgesData> = [];
  stages: Array<Stages> = [];
  popupVisible = true;
  index: number;
  userStage: Stages;

  constructor(private stagesNameController: StagesNameController,
              private stagesController: StagesController,
              private usersStagesDataController: UsersStagesDataController) {
  }

  ngOnInit() {

    this.stagesNameController.getStagesName().subscribe((res: any[]) => {
      this.stagesName = res;
    });

  }

  selectNameGames() {
    this.stages.length = 0;
    this.stagesController.getStageById(this.name).subscribe((res: any[]) => {
      this.stages = res;
      console.log(this.stages);
    });
  }

  usersStagesData(stageId: number, userId: number, index: number) {
    this.userStage = this.stages[index];
    this.usersStagesDataController.getUsersStagesData(stageId, userId).subscribe((rec: any) => {
      this.usersSatgesData = rec;
      this.popupVisible = false;
      this.index = index;
      console.log(this.usersSatgesData);
    });

  }

  timeConverter(second: number) {
    if (second % 60 < 10){
      return Math.floor(second / 60) + ':0' + second % 60;
    } else {
      return Math.floor(second / 60) + ':' + second % 60;
    }
  }
}
