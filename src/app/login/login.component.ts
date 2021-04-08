import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user/user.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = {userName:'' , password:''};
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    localStorage.setItem("name",this.user.userName);
  }
}
