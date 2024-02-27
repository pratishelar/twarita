import { Component, Input, OnInit } from '@angular/core';
import { room } from '../../rooms/rooms.service';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input() roomJumbotron!: room;
  constructor() { }

  ngOnInit() {
  }

}
