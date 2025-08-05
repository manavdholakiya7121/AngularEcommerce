import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../../core/service/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignup {

  public login_url = "http://localhost:3000";
  public reg_url = "http://localhost:3000";

  constructor(private http:HttpClient, private apiService:Api) { }

  authLogin(user_name:any, password:any):Observable<any>{
    return this.apiService.get(this.login_url+'/user?email='+user_name+'&password='+password);
  }

  adminLogin(user_name:any, password:any):Observable<any>{
    return this.apiService.get(this.login_url+'/user?email='+user_name+'&password='+password+'&role=admin');
  }

  userRegister(user_dto:any):Observable<any>{
    return this.apiService.post(this.reg_url+'/user',user_dto)
  }
}
