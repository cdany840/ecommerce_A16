import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() height = 500;

  @Input() isFullScreen = false;

  @Input() items: ICarouselItem[] = [];

  public finalHeight: string | number = 0;

  public currentPosition = 0;


  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.forEach((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });

    setInterval(() => {
      this.setNext();
    }, 5000);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    const item = this.items.find(i => i.id === 0);
    if (item?.marginLeft !== undefined) {
      item.marginLeft = -100 * position;
    }

  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    const item = this.items.find(i => i.id === 0);
    if (item?.marginLeft !== undefined) {
      item.marginLeft = finalPercentage;
    }
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    const item = this.items.find(i => i.id === 0);
    if (item?.marginLeft !== undefined) {
      item.marginLeft = finalPercentage;
    }
    this.currentPosition = backPosition;
  }



}
