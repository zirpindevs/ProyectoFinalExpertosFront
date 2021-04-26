import { IUser } from "./iuser.interface";

export class User implements IUser{
  email: string;
  password: string;

  constructor(username: string, password: string) {
    this.email = username;
    this.password = password;
  }

}
