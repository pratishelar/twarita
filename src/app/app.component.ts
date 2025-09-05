import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { SearchComponent } from './home/search/search.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AnalyticsService } from './_services/GoogleAnalytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private analytics: AnalyticsService) {}

  title = 'twarita';
}
