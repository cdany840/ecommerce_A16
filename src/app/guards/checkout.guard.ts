import { CanActivateFn } from '@angular/router';


export const checkoutGuard: CanActivateFn = (router, state) => {
    const token = localStorage.getItem('carrito');
  
    if (token) {
      return true;
    }
  
    window.location.href = '/';
    return false;
  };