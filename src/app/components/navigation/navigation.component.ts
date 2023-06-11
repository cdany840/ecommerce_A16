import { Component, HostBinding, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition,} from '@angular/animations';
import { ThemeServiceService } from 'src/app/theme-service.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subcategories } from 'src/app/models/subcategories';
import { CategoryService } from 'src/app/services/category.service';


const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      opacity: 1,
    })
  ),
  state(
    'close',
    style({
      opacity: 0,
      transform: 'translate(0, 5px)'
    })
  ),
  transition('open => close', [animate('.15s ease-out')]),
  transition('close => open', [animate('.2s ease-in')]),
]);

const leftInOut = trigger('leftInOut', [
  state(
    'open',
    style({
      position: 'relative',
      overflow: 'hidden'
    })
  ),
  state(
    'close',
    style({
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
    })
  ),
  transition('open => close', [animate('500ms ease-in-out', style({ left: '-100%' }))]),
  transition('close => open', [animate('200ms ease-in', style({ left: '0%' }))]),
]);



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [fadeInOut, leftInOut],
})


export class NavigationComponent implements OnInit {

  jwtHelper = new JwtHelperService();
  userData: any;
  categories: any;

  constructor(private themeServiceService: ThemeServiceService, private authService:AuthService, private categoryService: CategoryService) {
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }


  ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      this.userData = this.jwtHelper.decodeToken(token);

    }
    this.getCategories();
  }

  logout() {
    this.authService.logout();
  }
  
  isShow = false;
  mobileSubMenu = false;
  mobileMenu: boolean = true;
  mobileUMenu = true;

  fadeInOutDropdown(): void {
    this.isShow = !this.isShow;
  }

  mobileMOpen() {
    this.mobileMenu = !this.mobileMenu;
  }

  mobileUser() {
    this.mobileUMenu = !this.mobileUMenu;
  }

  mobileSubOpen() {
    this.mobileSubMenu = !this.mobileSubMenu;
  }

  isDarkMode = false;

  toggleDarkMode() {
    this.themeServiceService.toggleDarkMode();
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
   }

}
