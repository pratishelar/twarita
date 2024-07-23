import { Component, Input, OnInit } from '@angular/core';
import { room } from '../../rooms/rooms.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit {
  @Input() roomCarousel!: room;
  photos:any;
  constructor() { }

  ngOnInit() {
    this.photos = this.roomCarousel.photos;
  }

}
