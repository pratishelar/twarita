import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { MapsComponent } from './maps/maps.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SearchComponent, RoomsComponent, MapsComponent, AboutComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
