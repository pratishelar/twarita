import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../_services/google-places.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-google-reviews',
  templateUrl: './google-reviews.component.html',
  styleUrls: ['./google-reviews.component.css'],
  imports: [CommonModule]
})
export class GoogleReviewsComponent implements OnInit {
  reviews: google.maps.places.PlaceReview[] = [];
  averageRating: any;
  totalRatings: number | null = null;
  ratingBreakdown: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  placeId = 'ChIJwVVPKAC_xTsRA7-o4ENZcBc'; // Example place ID

  constructor(private googlePlacesService: GooglePlacesService) {}

  ngOnInit() {
    this.loadReviews(this.placeId);
  }

  loadReviews(placeId: string): void {
    const map = new google.maps.Map(document.createElement('div'));
    const service = new google.maps.places.PlacesService(map);

    service.getDetails({ placeId }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        
        this.reviews = place?.reviews || [];
        this.averageRating = place?.rating || null;
        this.totalRatings = place?.user_ratings_total || null;
        this.calculateRatingBreakdown();
        console.log(place);
      } else {
        console.error('Error fetching reviews:', status);
      }
    });
  }

  calculateRatingBreakdown(): void {
    this.ratingBreakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.reviews.forEach((review) => {
      if (review.rating) {
        this.ratingBreakdown[review.rating]++;
      }
    });
  }

  get stars() {
    return Array(Math.floor(this.averageRating)).fill(0);
  }
}
