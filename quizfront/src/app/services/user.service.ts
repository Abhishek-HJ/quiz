
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(
    private http : HttpClient) { }

  //add user
  public addUser(user:any){

    //return this.http.post('${baseUrl}/user/',user);
     return this.http.post(baseUrl+'/user/',user);
  }

  public login(userName:any,password:any){

    //baseUrl+'/user/login/${userName}/${password}
    
     return this.http.post(baseUrl+'/user/login/' + userName + '/' + password +'',userName,password);
  }
  



}
