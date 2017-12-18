import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {AuthData} from "./auth-data";
import {UserPublic} from "./user-public";
import {UsersService} from "../management/user.service";

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authData: AuthData = new AuthData;
  userInfo: UserPublic;

  constructor(private loginService: LoginService, private userService: UsersService) {
  }

  ngOnInit() {
    this.getUserInfo();
  }

  isLogged() {
    return this.loginService.isLogged();
  }

  logout(): void{
    this.loginService.logout().subscribe(next => {
        console.log('Exited');
      },
      error => {
        console.error(error);
      });
  }

  register(): void {
    this.loginService.register(this.authData).subscribe(next => {
        console.log('Registered user ');
        console.log(next.login);
      },
      error => {
        console.error(error);
      })
  }

  getUserInfo(){
    if(this.isLogged()){
      this.userService.getMyUserInfo().subscribe(userInfo => {
        console.log('Got user info: ' + userInfo.role);
        this.userInfo = userInfo;
      });
    }
  }

  enter(): void {
    this.loginService.enter(this.authData).subscribe(next => {
        this.getUserInfo();
      },
      error => {
        console.error(error);
      })
  }
}
