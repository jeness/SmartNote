import { NgModule, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import * as $ from "jquery";
import { URLSearchParams,Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name = '';
  pwd = '';

  constructor(
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {

  }

  login() {
    //$(function(){alert('Hello');});
    // var jname = document.getElementById("name");
    // var jpwd = document.getElementById("pwd");
    // console.log(jname);
    // console.log(jpwd);

    var user = JSON.stringify({
      username:this.name, 
      password:this.pwd
   });
   if(user.length<30){
     alert("Invalid user infomation!")
    } else{
        this.http.post('http://localhost:3000/todos',user).subscribe(
        data => {
          //alert(this.name);
          this.router.navigate(['http://localhost:4200/notes'])
        },
        error => {
          console.log(JSON.stringify(error.json()));})
        }
    }
}
