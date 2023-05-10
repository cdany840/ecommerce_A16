import { Component } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  products = [
    { id: 1, name: 'Product 1', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 2, name: 'Product 2', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 3, name: 'Product 3', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 4, name: 'Product 4', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 5, name: 'Product 5', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 6, name: 'Product 6', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 7, name: 'Product 7', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 8, name: 'Product 8', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 9, name: 'Product 9', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
    { id: 10, name: 'Product 10', image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=1024x1024&w=is&k=20&c=ASsjLSJzfd2hyzwQlvR3McJTeGduju4pMxqWZXPiCc8=', link: '/producto' },
  ];

  currentIndex = 0;

  scrollPrevious() {
    const container = document.querySelector('.snap-x') as HTMLElement;
    const scrollAmount = -500; // Cantidad de desplazamiento en píxeles (negativo para desplazarse hacia la izquierda)
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }


  scrollNext() {
    const container = document.querySelector('.snap-x') as HTMLElement;
    const scrollAmount = 500; // Cantidad de desplazamiento en píxeles
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }



}
