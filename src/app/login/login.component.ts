import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup|any ;

  constructor(private fb: FormBuilder,
    private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
   
    console.log(this.loginForm.value['email']);
    console.log(this.loginForm.value['password']);
    this.service.login(this.loginForm.value['email'],this.loginForm.value['password']).subscribe(res=>{
      console.log("------------------")
      console.log(res['status_code']);
      console.log(res['status'])
      console.log("------------------")
      if(res['status_code'] == 200 && res['status']== true){
        localStorage.setItem("id",res['response'][0]['id']);
        localStorage.setItem("email",res['response'][0]['email']);
        localStorage.setItem("name",res['response'][0]['name'])
        localStorage.setItem("is_login","true")
        this.router.navigate(["/dashboard"]);
      }else{
        console.log("Logged in Failed");
      }
    })
  }
  

}
