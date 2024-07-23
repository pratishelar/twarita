import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { BookwhatsappComponent } from './bookwhatsapp/bookwhatsapp.component';
import { GoogleReviewsComponent } from './google-reviews/google-reviews.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SearchComponent,
    RoomsComponent,
    AboutComponent,
    CarouselComponent,
    ContactComponent,
    BookwhatsappComponent,
    GoogleReviewsComponent,
    VideoBackgroundComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
