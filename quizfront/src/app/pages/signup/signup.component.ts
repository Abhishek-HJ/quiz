import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
constructor(private userService: UserService, private snack: MatSnackBar, private router: Router){}

public user={
  userName : '',
  password : '',
  firstName : '',
  lastName : '',
  email :'',
  phone : ''
};


ngOnInit(): void {
  
}
  formSubmit(){    
    if(this.user.userName == '' || this.user.userName == null){
     // alert('user name required');
     this.snack.open("Username is required",'OK')
      return;
    }

//subscribe is like on sucess listener on falure listner
this.userService.addUser(this.user).subscribe(
  (data)=>{
    console.log(data);
    this.router.navigate(['/user']);
    
    //alert('sucess');
    //this.snack.open(" Registration sucessful"+data,'OK')
    swal({
      title: "Congratulations!",
      text: " You've unlocked the world of quizzes. Let the games begin!",
      icon: "success",
      
    });


  },
  (error)=>{
   
    //alert('something went wrong'+error);
    this.snack.open("something went wrong",'OK')
  }
)

  }
}
