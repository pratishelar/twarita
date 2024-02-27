import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-roomDetails',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    JumbotronComponent,
    CarouselComponent,
    AmenitiesComponent,
    ImageGalleryComponent
  ],
  templateUrl: './roomDetails.component.html',
  styleUrls: ['./roomDetails.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  room$!: Observable<room | undefined>;
  
  constructor(
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


}
