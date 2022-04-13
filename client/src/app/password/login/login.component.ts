import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public passwordCheck = 'password';
  public login: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  passwordVisibleHide() {
    if (this.passwordCheck == 'password') {
      this.passwordCheck = 'text';
    } else {
      this.passwordCheck = 'password';
    }
  }
}
