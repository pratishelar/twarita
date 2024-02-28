import { Component, Input, OnInit } from '@angular/core';
import { room } from '../../rooms/rooms.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-amenities',
  standalone: true,
  imports:[FontAwesomeModule],
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
  @Input() roomAmenities!: room;

  constructor() { }

  ngOnInit() {
  }

}
