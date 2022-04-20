import {Component, OnInit} from '@angular/core';
import {UsersLogin} from "../../entities/Users";
import {AuthorizationController} from "../../controllers/AuthorizationController";
import {Jwt} from "../../entities/JWT";
import {JwtService} from "../../controllers/JwtService";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public passwordCheck = 'password';
  public userLogin: UsersLogin = new UsersLogin('', '');
  public jwtDecoder: Jwt;

  constructor(private authorizationController: AuthorizationController,
              private router: Router,
              private jwtService: JwtService) {
  }

  ngOnInit(): void {
    localStorage.removeItem('auth_token');
  }

  passwordVisibleHide() {
    if (this.passwordCheck == 'password') {
      this.passwordCheck = 'text';
    } else {
      this.passwordCheck = 'password';
    }
  }

  loginSend() {
    this.authorizationController.loginUser(this.userLogin).subscribe((rec: any) => {
      if (rec.token) {
        localStorage.setItem('auth_token', rec.token);
        this.jwtDecoder = this.jwtService.DecodeToken(rec.token);
        localStorage.setItem('username', this.jwtDecoder.sub);
        for (let i = 0; i < this.jwtDecoder.roles.length; i++) {
          if (this.jwtDecoder.roles[i] == 'ADMIN')
            localStorage.setItem('roles', this.jwtDecoder.roles[i]);
        }
          this.router.navigateByUrl('').then(() => window.location.reload());
      }
    });
  }
}
