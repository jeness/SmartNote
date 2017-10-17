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
    //this.router.navigate(['/home']);
    //$(function(){alert('Hello');});
  this.http.post('http://localhost:3000/todos',
  JSON.stringify({
     username:this.name, 
     password:this.pwd
  })).subscribe(
  data => {
    alert(this.name);},
  error => {
    console.log(JSON.stringify(error.json()));})
  }
}
