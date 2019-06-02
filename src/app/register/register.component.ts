import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }

  us:User={
    userName:"",
    email:"",
    password:""
  };

  onSubmit():void{
    console.log(this.us);
    this.http.post("http://localhost:3000/api/reg",this.us).subscribe(
      data =>{
        console.log("Post req is successfull",data);
        this.router.navigate(["/","logprofile"]);
      },
      error =>{
        console.log("Error",error);
      });
    }
  }
