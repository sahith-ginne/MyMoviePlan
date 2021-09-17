import { AdminService } from './../admin.service';
import { Admin } from './../admin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  admin : Admin = new Admin();
  constructor(private service : AdminService) { }

  ngOnInit(): void {
  }

  createAdmin(){
    // return console.log(this.user)
    this.service.createAdmin(this.admin).subscribe(
      res => console.log(res),
      err => console.log(err)
    )

  }
}
