import { CanActivateFn } from '@angular/router';


export const profileGuard: CanActivateFn = (router, state) => {
  const token = localStorage.getItem('token');

  if (token) {
    return true;
  }

  window.location.href = 'auth/login';
  return false;
};