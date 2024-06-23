// google-places.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {
  private placesService: google.maps.places.PlacesService;

  constructor() {
    const map = new google.maps.Map(document.createElement('div'));
    this.placesService = new google.maps.places.PlacesService(map);
  }

  getPlaceDetails(placeId: string): Promise<google.maps.places.PlaceResult> {
    return new Promise((resolve, reject) => {
      this.placesService.getDetails({ placeId }, (place:any, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(place);
        } else {
          reject(status);
        }
      });
    });
  }

  getReviews(placeId: string): Promise<google.maps.places.PlaceReview[]> {
    return this.getPlaceDetails(placeId).then(place => place.reviews || []);
  }
}
