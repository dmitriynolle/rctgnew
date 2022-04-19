import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active: Array<string> = [];
  fon = 'fon_big';
  public username: string = localStorage.getItem('username');
  public role: string = localStorage.getItem('roles');

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.active[0] = 'buttom_color';
  }

  serActive(num: number) {
    for (let i = 0; i < this.active.length; i++) {
      this.active[i] = null;
    }
    this.active[num] = 'buttom_color';
  }

  delJwt() {
    this.username = '';
    this.role = '';
    localStorage.removeItem('username');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('roles');
    this.router.navigateByUrl('');
  }
}

