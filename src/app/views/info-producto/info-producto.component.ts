import { Component } from '@angular/core';


@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.css']
})
export class InfoProductoComponent {

  items = [{
    id: 1,
    name: 'PC GLORIUS',
    description: 'Computadora PRIDE GAMING TINO / POTENCIADA POR MUNFROST / NVIDIA® GeForce RTX™ 3060 / Intel Core i5-11400F / 16GB RAM / 480GB SSD M.2 NVMe / DISIPADOR POR AIRE / 5 VENTILADORES ARGB / 650W 80+ BRONZE / ¡MOUSEPAD MUNFROST XL DE REGALO!',
    price: 21999,
    oldPrice: 23999,
    sku: '01324',
    stock: 10,
    tags: [
      'PC GAMER',
      'OFERTA',
      'CON REGALO'
    ],
    image: 'https://ddtech.mx/assets/uploads/c3263a0877bcc3481330d89ce62ad246.jpg',
    category: 'Escritorio',
    landingPage: 'https://discosdurosymas.com/productos3/PC-PRIDE-GAMING-TINO/PC-PRIDE-GAMING-TINO.jpg'
  },{
    id: 2,
    name: 'PC GLORIUS',
    description: 'Computadora PRIDE GAMING TINO / POTENCIADA POR MUNFROST / NVIDIA® GeForce RTX™ 3060 / Intel Core i5-11400F / 16GB RAM / 480GB SSD M.2 NVMe / DISIPADOR POR AIRE / 5 VENTILADORES ARGB / 650W 80+ BRONZE / ¡MOUSEPAD MUNFROST XL DE REGALO!',
    price: 21999,
    oldPrice: 23999,
    sku: '01324',
    stock: 99,
    tags: [
      'PC GAMER',
      'OFERTA',
      'CON REGALO'
    ],
    image: 'https://ddtech.mx/assets/uploads/584f1900444d57708af3f423ea9648b9.jpg' ,
    category: 'Escritorio',
    landingPage: 'https://discosdurosymas.com/productos3/PC-PRIDE-GAMING-TINO/PC-PRIDE-GAMING-TINO.jpg'
  },{
    id: 3,
    name: 'PC GLORIUS',
    description: 'Computadora PRIDE GAMING TINO / POTENCIADA POR MUNFROST / NVIDIA® GeForce RTX™ 3060 / Intel Core i5-11400F / 16GB RAM / 480GB SSD M.2 NVMe / DISIPADOR POR AIRE / 5 VENTILADORES ARGB / 650W 80+ BRONZE / ¡MOUSEPAD MUNFROST XL DE REGALO!',
    price: 21999,
    oldPrice: 23999,
    sku: '01324',
    stock: 99,
    tags: [
      'PC GAMER',
      'OFERTA',
      'CON REGALO'
    ],
    image: 'https://ddtech.mx/assets/uploads/7e12a89d294307a079c92740c08064e2.jpg' ,
    category: 'Escritorio',
    landingPage: 'https://discosdurosymas.com/productos3/PC-PRIDE-GAMING-TINO/PC-PRIDE-GAMING-TINO.jpg'
  },{
    id: 4,
    name: 'PC GLORIUS',
    description: 'Computadora PRIDE GAMING TINO / POTENCIADA POR MUNFROST / NVIDIA® GeForce RTX™ 3060 / Intel Core i5-11400F / 16GB RAM / 480GB SSD M.2 NVMe / DISIPADOR POR AIRE / 5 VENTILADORES ARGB / 650W 80+ BRONZE / ¡MOUSEPAD MUNFROST XL DE REGALO!',
    price: 21999,
    oldPrice: 23999,
    sku: '01324',
    stock: 99,
    tags: [
      'PC GAMER',
      'OFERTA',
      'CON REGALO'
    ],
    image: 'https://ddtech.mx/assets/uploads/c8be62b7ac254cff780b24b300243ff7.jpg' ,
    category: 'Escritorio',
    landingPage: 'https://discosdurosymas.com/productos3/PC-PRIDE-GAMING-TINO/PC-PRIDE-GAMING-TINO.jpg'
  },{
    id: 5,
    name: 'PC GLORIUS',
    description: 'Computadora PRIDE GAMING TINO / POTENCIADA POR MUNFROST / NVIDIA® GeForce RTX™ 3060 / Intel Core i5-11400F / 16GB RAM / 480GB SSD M.2 NVMe / DISIPADOR POR AIRE / 5 VENTILADORES ARGB / 650W 80+ BRONZE / ¡MOUSEPAD MUNFROST XL DE REGALO!',
    price: 21999,
    oldPrice: 23999,
    sku: '01324',
    stock: 99,
    tags: [
      'PC GAMER',
      'OFERTA',
      'CON REGALO'
    ],
    image: 'https://ddtech.mx/assets/uploads/ceda79704cd8e8d4e958ae77f8c8ab66.jpg' ,
    category: 'Escritorio',
    landingPage: 'https://discosdurosymas.com/productos3/PC-PRIDE-GAMING-TINO/PC-PRIDE-GAMING-TINO.jpg'
  },{
    id: 6,
    name: 'PC GLORIUS',
    description: 'Computadora PRIDE GAMING TINO / POTENCIADA POR MUNFROST / NVIDIA® GeForce RTX™ 3060 / Intel Core i5-11400F / 16GB RAM / 480GB SSD M.2 NVMe / DISIPADOR POR AIRE / 5 VENTILADORES ARGB / 650W 80+ BRONZE / ¡MOUSEPAD MUNFROST XL DE REGALO!',
    price: 21999,
    oldPrice: 23999,
    sku: '01324',
    stock: 10,
    tags: [
      'PC GAMER',
      'OFERTA',
      'CON REGALO'
    ],
    image: 'https://ddtech.mx/assets/uploads/285979bc55c88fd83523bd9adb103c22.jpg' ,
    category: 'Escritorio',
    landingPage: 'https://discosdurosymas.com/productos3/PC-PRIDE-GAMING-TINO/PC-PRIDE-GAMING-TINO.jpg'
  },]



  selectedImageIndex: number = 0;

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  cantidad: number = 1;

  restar(){
    if(this.cantidad <= 0){
      this.cantidad = this.cantidad = 0;
    }else{
      this.cantidad = this.cantidad-1
    }
  }

  sumar(){
    if(this.cantidad >= this.items[0].stock){
      this.cantidad = this.cantidad;
    }else{
    this.cantidad = this.cantidad+1;
    }
  }
}
