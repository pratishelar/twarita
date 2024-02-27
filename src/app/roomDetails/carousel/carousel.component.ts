import { Component, Input, OnInit } from '@angular/core';
import { room } from '../../rooms/rooms.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() roomCarousel!: room;
  constructor() { }

  ngOnInit() {
  }

}
