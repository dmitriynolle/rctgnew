export class Users {
  constructor(
    public id: number,
    public nomer: number,
    public name: string) {
  }

}

export class UsersRegister {
  constructor(
    public id: number,
    public username: string,
    public firstName: string,
    public lastName: string,
    public password: string) {
  }
}

export class UsersLogin {
  constructor(
    public username: string,
    public password: string) {
  }
}
