import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:any;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    console.log("--------")
    this.getUser(localStorage.getItem("id"));
    console.log(this.users);
  }

  getUser(id:any){
    this.service.getUsers(id).subscribe(res=>{
      this.users = res['response'];
      console.log(this.users);
    })
  }

}
