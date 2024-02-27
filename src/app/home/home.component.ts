import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SearchComponent, RoomsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
