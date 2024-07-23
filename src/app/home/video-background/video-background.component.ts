import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css'],
  standalone: true
})
export class VideoBackgroundComponent implements AfterViewInit {
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }


  ngAfterViewInit(): void {
    if (this.backgroundVideo) {
      this.backgroundVideo.nativeElement.muted = true;
      this.backgroundVideo.nativeElement.play();
    }
  }

  goToUrl(): void {
    this.document.location.href = 'https://bookings.asiatech.in/?page=7194&type=googlehotelads&checkin=2024-06-19&checkout=2024-06-20&bookingSource=GoogleCPC';
  }

  // playVideo(): void {
  //   if (this.backgroundVideo) {
  //     this.backgroundVideo.nativeElement.play();
  //   }
  // }

}
