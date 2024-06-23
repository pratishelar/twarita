import { Component, OnInit } from '@angular/core';
import { GooglePlacesService } from '../../_services/google-places.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  reviews: google.maps.places.PlaceReview[] = [];
  placeId = 'ChIJwVVPKAC_xTsRA7-o4ENZcBc'; // Example place ID

  constructor(private googlePlacesService: GooglePlacesService) { }

  ngOnInit(): void {
    this.loadReviews(this.placeId);
  }

  loadReviews(placeId: string): void {
    const map = new google.maps.Map(document.createElement('div'));
    const service = new google.maps.places.PlacesService(map);

    service.getDetails({ placeId }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.reviews = place?.reviews || [];
        console.log(this.reviews);
      } else {
        console.error('Error fetching reviews:', status);
      }
    });
  }
}

