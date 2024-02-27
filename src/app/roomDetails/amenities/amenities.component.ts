import { Component, Input, OnInit } from '@angular/core';
import { room } from '../../rooms/rooms.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports:[FontAwesomeModule],
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
  @Input() roomAmenities!: room;
  faCoffee = faCoffee;
  faTv = faTv;
  faCar = faCar;
  faFan = faFan;
  constructor() { }

  ngOnInit() {
  }

}
