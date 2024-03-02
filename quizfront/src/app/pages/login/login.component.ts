import { Component,OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  constructor(private userService : UserService , 
    private snack : MatSnackBar,
    private http: HttpClient,
    private router: Router){

  }

public userName = ""
public password = ""


  ngOnInit(): void {
  
  }

  formSubmit(){    
    if(this.userName == '' || this.userName == null || this.password == '' || this.password == null){
     // alert('user name required');
     this.snack.open("Both fields are required",'OK')
      return;
    }
  this.userService.login(this.userName,this.password).subscribe(
   (data)=>{

const num : String = data.toString()
//alert(num)

  if (num === "44") {
    // Do something if num is 44
    //this.snack.open("Login as admin ",'OK')
    this.router.navigate(['admin']);
    
  } else if (num === "45") {
    // Do something if num is 45
    //this.snack.open("Login as user "+data,'OK')
    this.router.navigate(['user']);
  } else {
    // Handle unexpected num value
    this.snack.open("something went wrong",'OK')

  }
} ,

   (error)=>{
      this.snack.open("something went wrong"+error,'OK')
    }
   )
  }
}
