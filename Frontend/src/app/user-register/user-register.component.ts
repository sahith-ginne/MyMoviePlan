import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  // user: any;

  user: User = new User();
  // createUserData = {}

  constructor(private service : UserService) { }

  ngOnInit(): void {

    
  }

  createUser(){
    // return console.log(this.user)
    this.service.createUser(this.user).subscribe(
      res => console.log(res),
      err => console.log(err)
    )

  }

}
