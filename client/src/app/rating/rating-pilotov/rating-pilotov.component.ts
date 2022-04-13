import { Component, OnInit } from '@angular/core';
import {RatingPilotov} from '../../data/user.model';
import {Repository} from '../../data/repository';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rating-pilotov',
  templateUrl: './rating-pilotov.component.html',
  styleUrls: ['./rating-pilotov.component.scss']
})
export class RatingPilotovComponent implements OnInit {
  ratingPilotov: Array<RatingPilotov> = [];
  ratingPilota: Array<RatingPilotov> = [];
  private subscription: Subscription;
  memberID: string;
  rating: string;


  constructor(private repository: Repository, private route: ActivatedRoute) {
    this.subscription = route.params.subscribe(rec => {
      this.memberID = rec.memberID;
      this.rating = rec.rating;
    });
  }

  ngOnInit(): void {
    this.repository.getRatingPilotov().subscribe((rec: any) => {
      this.ratingPilotov = rec;
      this.ratingPilota = this.ratingPilotov.filter(rec => rec.MemberID == this.memberID);
      for (let i = 0; i < this.ratingPilota[0].League.length; i++) {
          this.ratingPilota[0].League[i].Tournaments = this.ratingPilota[0].League[i].Tournaments.sort((n1, n2) => {
            if (n1.TournamentDate > n2.TournamentDate) {
              return 1;
            }
            if (n1.TournamentDate < n2.TournamentDate) {
              return -1;
            }
            return 0;
          });
        for (let j = 0; j < this.ratingPilota[0].League[i].Tournaments.length; j++) {
          const date = new Date(this.ratingPilota[0].League[i].Tournaments[j].TournamentDate);
          // console.log(date);
        }
      }
    });
  }
}
