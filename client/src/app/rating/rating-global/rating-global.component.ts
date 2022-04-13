import { Component, OnInit } from '@angular/core';
import {RatingNN} from '../../data/user.model';
import {Repository} from '../../data/repository';

@Component({
  selector: 'app-rating-global',
  templateUrl: './rating-global.component.html',
  styleUrls: ['./rating-global.component.scss']
})
export class RatingGlobalComponent implements OnInit {

  ratingNN: Array<RatingNN> = [];

  constructor( private repository: Repository) { }

  ngOnInit(): void {
    this.repository.getRatingGlobal().subscribe((rec: any) => {
      this.ratingNN = rec;
    });
  }

}
