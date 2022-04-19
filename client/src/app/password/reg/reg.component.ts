import {Component, OnInit} from '@angular/core';
import {UsersRegister} from "../../entities/Users";
import {AuthorizationController} from "../../controllers/AuthorizationController";

@Component({
  selector: 'app-index',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  public user: UsersRegister = new UsersRegister(null, '', '', '', '');
  visiblePassword = 'password';
  public password2: string;

  constructor(private authorizationController: AuthorizationController) {
  }

  ngOnInit(): void {
  }

  changeVisiblePassword() {
    if (this.visiblePassword == 'password')
      this.visiblePassword = 'text';
    else
      this.visiblePassword = 'password';
  }

  registration() {
    console.log(this.user);
    this.authorizationController.registerUser(this.user).subscribe(rec => console.log(rec), error => console.log(error));
  }
}
