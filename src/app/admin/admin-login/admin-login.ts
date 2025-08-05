import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginSignup } from '../../shared/services/login-signup';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css'
})
export class AdminLogin implements OnInit {

  signInFormValue:any={}
  user_data:any

  constructor(private router:Router, private loginService:LoginSignup){}

  ngOnInit(): void {
    
  }

  onsubmitSignIn(){
    this.loginService.adminLogin(this.signInFormValue.userEmail, this.signInFormValue.userPassword).subscribe(data => {
      this.user_data = data;
      if(this.user_data.length == 1){
        sessionStorage.setItem("user_session_id", this.user_data[0].id);
        sessionStorage.setItem("role", this.user_data[0].role);
        this.router.navigateByUrl('/admin-dashboard');
      }else{
        alert('Invalid Response');
      }
    },error => {
      console.log(error)
    });
  }

}
