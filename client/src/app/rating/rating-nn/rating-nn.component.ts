import {Component, OnInit} from '@angular/core';
import {RatingNN, RatingPilotov} from '../../data/user.model';
import {Repository} from '../../data/repository';

@Component({
  selector: 'app-rating-nn',
  templateUrl: './rating-nn.component.html',
  styleUrls: ['./rating-nn.component.scss']
})
export class RatingNNComponent implements OnInit {

  ratingNN: Array<RatingNN> = [];

  constructor(private repository: Repository) {
  }

  ngOnInit(): void {
    this.repository.getRatingNN().subscribe((rec: any) => {
      this.ratingNN = rec;
      console.log(this.ratingNN);
    });
  }
}
