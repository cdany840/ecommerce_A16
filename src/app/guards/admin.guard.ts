import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


export const adminGuard: CanActivateFn = (router, state) => {

    const jwtHelper = new JwtHelperService();

    const token = localStorage.getItem('token');
    const user = token ? jwtHelper.decodeToken(token) : null;
    const isAdmin = user && user.roles[0] === 'admin';

    if (isAdmin) {
      return true;
    } else {
      window.location.href = '/';
      return false;
    }
};