import { Component, input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 signupUsers:any[]=[]
constructor( private router:Router, private authService: AuthService){

}

loginObj={
  emailid:'',
  password:''
}
onNgInit():void {
  // const localData = localStorage.getItem('signupUsers');
  // if( localData != null){
  //   this.signupUsers = JSON.parse(localData);    
  // }
}
  onLogin(){
   debugger
   this.authService.onLogin(this.loginObj).subscribe((res : any)=>{
    debugger
    localStorage.setItem('token', res.token);
   })
    // const isUserExist = this.signupUsers.find( m => m.userName === this.loginObj.userName && m.password === this.loginObj.password);
    //  console.log( isUserExist);
    // if(isUserExist != undefined){
    //   console.log( isUserExist);
    //   alert('Logged in successfully');
    //   this.onSignup();
    // }else {
    //     console.log( isUserExist);
    //   alert('Wrong Credentials')
    // }
  }

  onSignup(){
   this.router.navigate(['/layout'])
  }
}

