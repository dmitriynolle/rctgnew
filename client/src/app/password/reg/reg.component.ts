import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  private clientForm: FormGroup;
  private rezult: Array<any> = [];
  private validStyle: Array<string> = [];
  private passwordCheck = 'password';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this._createForm();
  }

  private _createForm() {
    this.clientForm = this.fb.group({
      login: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      firstName: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      secondPassword: [null, Validators.compose([Validators.required])]
    });
  }

  get _login() {
    this.rezult[0] = this.clientForm.get('login');
    if (!/[А-я0-9]/.test(this.rezult[0].value)) {
      this.validStyle[6] = 'ok';
    } else {
      this.validStyle[6] = 'error';
    }
    if (this.rezult[0].value ? this.rezult[0].value.length > 3 : false) {
      this.validStyle[5] = 'ok';
    } else {
      this.validStyle[5] = 'error';
    }
    return this.rezult[0];
  }

  get _lastName() {
    this.rezult[1] = this.clientForm.get('lastName');
    if (!/[A-z0-9]/.test(this.rezult[1].value)) {
      this.validStyle[7] = 'ok';
    } else {
      this.validStyle[7] = 'error';
    }
    return this.rezult[1];
  }

  get _firstName() {
    this.rezult[2] = this.clientForm.get('firstName');
    if (!/[A-z0-9]/.test(this.rezult[2].value)) {
      this.validStyle[8] = 'ok';
    } else {
      this.validStyle[8] = 'error';
    }
    return this.rezult[2];
  }

  get _password() {
    this.rezult[3] = this.clientForm.get('password');
    if (/[A-Z]/.test(this.rezult[3].value) && !/[А-я]/.test(this.rezult[3].value)) {
      this.validStyle[3] = 'ok';
    } else {
      this.validStyle[3] = 'error';
    }
    if (/[a-z]/.test(this.rezult[3].value) && !/[А-я]/.test(this.rezult[3].value)) {
      this.validStyle[4] = 'ok';
    } else {
      this.validStyle[4] = 'error';
    }
    if (/[0-9]/.test(this.rezult[3].value)) {
      this.validStyle[2] = 'ok';
    } else {
      this.validStyle[2] = 'error';
    }
    if (this.rezult[3].value ? this.rezult[3].value.length > 7 : false) {
      this.validStyle[1] = 'ok';
    } else {
      this.validStyle[1] = 'error';
    }
    return this.rezult[3];
  }

  get _secondPassword() {
    this.rezult[4] = this.clientForm.get('secondPassword');
    if (this.rezult[4].value == this.rezult[3].value) {
      this.validStyle[9] = 'ok';
    } else {
      this.validStyle[9] = 'error';
    }
    return this.rezult[4];
  }

  passwordVisibleHide() {
    if (this.passwordCheck == 'password') {
      this.passwordCheck = 'text';
    } else {
      this.passwordCheck = 'password';
    }
  }
}
