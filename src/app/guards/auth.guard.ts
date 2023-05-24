import { CanActivateFn } from '@angular/router';


export const authGuard: CanActivateFn = (router, state) => {
  const token = localStorage.getItem('token');

  if (token) {
    window.location.href = '/';
    return false;
  }

  return true;
};
