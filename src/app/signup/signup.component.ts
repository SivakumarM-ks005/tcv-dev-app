import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private router: Router) { }
  signupUsers: any[] = []

  onNgInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  signupObj = {
    userName: '',
    emailid: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  loginObj ={
    userName:'',
    password:''
  }
  onSingup() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      emailid: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  }

  onLogin(){
    const isUserExist = this.signupUsers.find(m =>m.userName == this.loginObj.userName &&  m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('user logged in successfully');
    }else {
      alert('Wrong credetials')
    }
  }
  gotologin() {
    this.router.navigate(['/'])
  }
}
