import { Component } from '@angular/core';
import { ThemeServiceService } from 'src/app/theme-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  isDarkMode = false;

  constructor(private themeServiceService: ThemeServiceService) {
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  } 

  toggleDarkMode() {
    this.themeServiceService.toggleDarkMode();
    this.isDarkMode = this.themeServiceService.isDarkModeEnabled();
  }

  mostrarFiltro = false;
  colorDropdown = false;
  sizeDropdown = false;
  categoryDropdown = false;
  colorAside = false;
  sizeAside = false;
  categoryAside = false;

  filtro(){
    this.mostrarFiltro = !this.mostrarFiltro; 
  }

  dropdownColor(){
    this.colorDropdown = !this.colorDropdown;
  }
  dropdownSize(){
    this.sizeDropdown = !this.sizeDropdown;
  }
  dropdownCategory(){
    this.categoryDropdown = !this.categoryDropdown;
  }

  asideColor(){
    this.colorAside = !this.colorAside;
  }
  asideSize(){
    this.sizeAside = !this.sizeAside;
  }
  asideCategory(){
    this.categoryAside = !this.categoryAside;
  }

}
