import { Component, OnInit } from '@angular/core';
import { RoomsCardComponent } from './roomsCard/roomsCard.component';
import { CommonModule } from '@angular/common';
import { RoomsService } from './rooms.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsCardComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {

  constructor(readonly roomsService: RoomsService) {}

  ngOnInit() {}
}
