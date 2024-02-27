import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { room } from '../rooms.service';

@Component({
  selector: 'app-roomsCard',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './roomsCard.component.html',
  styleUrls: ['./roomsCard.component.css'],
})
export class RoomsCardComponent implements OnInit {
  @Input() room!: room;
  @Input() index!: Number;

  constructor() {}

  ngOnInit() {}
}
