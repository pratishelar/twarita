import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  imports: [CommonModule]
})
export class ReviewsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
   
  }

}

