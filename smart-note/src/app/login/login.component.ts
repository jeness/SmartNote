import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
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
  ) { }

  ngOnInit() {

  }

  login() {
    this.router.navigate(['/home']);
  }
}