import { Component, OnInit } from '@angular/core';
import {UsersProfile, UsersRegister} from "../../entities/Users";
import {UsersController} from "../../controllers/UsersController";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public usersProfile: UsersProfile = new UsersProfile(null,'','', '', '',null);
  visiblePassword = 'password';
  visible = 0;
  public password2: string;

  constructor( private usersController: UsersController) { }

  ngOnInit(): void {
    this.usersController.getUserProfile(localStorage.getItem('username')).subscribe((rec:any) => {
      this.usersProfile = rec;
      console.log(this.usersProfile);
    })
  }

  changeVisiblePassword() {
    if (this.visiblePassword == 'password')
      this.visiblePassword = 'text';
    else
      this.visiblePassword = 'password';

  }

  registration() {
    console.log(this.usersProfile);
    this.usersController.saveProfileUser(this.usersProfile).subscribe(rec => console.log(rec), error => console.log(error));
  }
}
