import { Component } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/constants/carousel.const';
import { ICarouselItem } from 'src/app/components/carousel/icarousel-item.metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  constructor() {}
}
