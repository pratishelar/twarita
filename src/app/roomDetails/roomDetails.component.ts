import { Component, Inject, OnInit } from '@angular/core';
import { SearchComponent } from '../home/search/search.component';
import { Observable, map } from 'rxjs';
import { RoomsService } from '../rooms/rooms.service';
import { room } from '../rooms/rooms.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-roomDetails',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    JumbotronComponent,
    CarouselComponent,
    AmenitiesComponent,
    ImageGalleryComponent,
    ReviewsComponent,
  ],
  templateUrl: './roomDetails.component.html',
  styleUrls: ['./roomDetails.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  room$!: Observable<room | undefined>;

  constructor(@Inject(DOCUMENT) private document: Document,
    private roomService: RoomsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.room$ = this.route.paramMap.pipe(
      map((param) => {
        return this.roomService.rooms[Number(param.get('index'))];
      })
    );
  }

  goToUrl(): void {
    this.document.location.href = 'https://bookings.asiatech.in/?page=7194&type=googlehotelads&checkin=2024-06-19&checkout=2024-06-20&bookingSource=GoogleCPC';
  }
}
