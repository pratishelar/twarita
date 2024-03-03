import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { GoogleMapsService } from './mapReady.service';
declare var google: any;

@Component({
  selector: 'app-maps',
  standalone: true,
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false })
  mapContainer!: ElementRef<HTMLDivElement>;

  constructor(private googleMapsService: GoogleMapsService) {}

  ngAfterViewInit(): void {
    this.googleMapsService
      .loadScript('AIzaSyColwdtau73n9snn5oLjPaUpCVBmn74-iU')
      .then(() => {
        this.initMap();
      })
      .catch((error) => console.error('Google Maps loading failed', error));
  }

  initMap(): void {
    const center = { lat: 18.008122630614825, lng: 76.06906597278652 };
    const map = new google.maps.Map(this.mapContainer.nativeElement, {
      zoom: 15,
      center: center,
    });

    // Adding a simple marker
    const marker = new google.maps.Marker({
      position: center,
      map: map,
      title: 'Twarita Palace',
      // Custom icon
      icon: {
        url: '../../../assets/images/logo.png',
        scaledSize: new google.maps.Size(30, 30), // Scaling the icon
      },
    });

    // Adding an info window
    const infoWindow = new google.maps.InfoWindow({
      content: '<p>Twarita palace location Here</p>',
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  }
}
