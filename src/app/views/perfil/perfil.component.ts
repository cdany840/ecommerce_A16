import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  jwtHelper = new JwtHelperService();
  userData: any;

  constructor() { }

    ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.userData = this.jwtHelper.decodeToken(token);

    }
  }

}
