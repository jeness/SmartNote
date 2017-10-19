import { NgModule, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MsgService } from './../services/msg/msg.service';
import { HttpClient } from '@angular/common/http';

// import * as $ from "jquery";
// import { URLSearchParams,Http } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name = '';
  pwd = '';

  constructor(
    private http: HttpClient,
    private msg: MsgService,
    private router: Router,
    // private http: Http
  ) { }

  ngOnInit() {

  }

  login() {
    // this.router.navigate(['/home']);
    this.http.post('/api/login', {
      name: this.name,
      pwd: this.pwd
    }).subscribe((res) => {
      if (res['code'] !== 200) {
        this.msg.info( res['msg'] );
      } else {
        this.router.navigate(['/addLinkNote']);
        localStorage.setItem('userName', this.name);
      }
    });
  }
}

// login() {
//   //$(function(){alert('Hello');});
//   // var jname = document.getElementById("name");
//   // var jpwd = document.getElementById("pwd");
//   // console.log(jname);
//   // console.log(jpwd);
//   var user = JSON.stringify({
//     username:this.name, 
//     password:this.pwd
//  });
//  if(user.length<30){
//    alert("Invalid user infomation!")
//   } else{
//       this.http.post('http://localhost:3000/todos',user).subscribe(
//       data => {
//         //alert(this.name);
//         this.router.navigate(['http://localhost:4200/notes'])
//       },
//       error => {
//         console.log(JSON.stringify(error.json()));})
//       }
//   }
// }