import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule],
})
export class SearchComponent implements OnInit {
  checkInTime: any;

  constructor() {}

  ngOnInit() {}

  openDateTimePicker(inputElement: HTMLInputElement): void {
    // This function can be used to handle additional logic when the input receives focus
    inputElement.click(); // Trigger click to open the date-time picker
  }
}
