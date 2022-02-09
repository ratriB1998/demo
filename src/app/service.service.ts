import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  login(username:any, password:any) {
    const body={
      username:username,
      password:password
    }
 
    return this.http.post<any>('http://3.14.57.190:3002/api/v1/user/login', body)
        .pipe(map(user => {
         return user;
        }));
}

getUsers(userid:any) {
  const body={
    userid:userid
  }

  return this.http.post<any>('http://3.14.57.190:3002/api/v1/user/getUser', body)
      .pipe(map(user => {
       return user;
     }
    )
  );
}

addUser(name:any, email:any,password:any,phone:any,assigned_country:any,role:any) {
  const body={
    name:name,
    email:email,
    password:password,
    phone:phone,
    role:role,
    category:"",
    confirm_password:password,
    assigned_country:assigned_country
  }

  return this.http.post<any>('http://3.14.57.190:3002/api/v1/user/addUser', body)
      .pipe(map(user => {
       return user;
      }));
}



}
