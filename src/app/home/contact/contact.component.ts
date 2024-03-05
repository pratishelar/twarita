import { Component, OnInit } from '@angular/core';
import { MapsComponent } from '../maps/maps.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports:[MapsComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
