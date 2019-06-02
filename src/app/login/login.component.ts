import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }

  log:User={
    userName:"",
    email:"",
    password:""
  };

  onSubmit():void{
    console.log(this.log);
    this.http.post("http://localhost:3000/api/do_login",this.log).subscribe(
      data =>{
        console.log("Post req is successfull",data);
        this.router.navigate(["/","logprofile"]);
      },
      error =>{
        console.log("Error",error);
      });
    }

}
