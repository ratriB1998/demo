import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup|any;

  constructor(private fb: FormBuilder,private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      phone_number: ['', Validators.required],
      role: [''],
      assigned_country :[''],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }



  onSubmit(){
    this.service.addUser(this.addUserForm.value['name'],this.addUserForm.value['email'],this.addUserForm.value['password'],this.addUserForm.value['phone'],
    this.addUserForm.value['assigned_country'],this.addUserForm.value['role']).subscribe(res=>{
      if (res["status_code"]==200 && res["status"]==true){
        this.router.navigate(["users"])

      }
    })
  }
  
}
