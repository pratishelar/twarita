import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent implements OnInit{
  images = [
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // Add more images as needed
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  currentImageIndex: number | null = null;

  ngOnInit() {
    this.preloadImages();
  }


  preloadImages() {
    for (const src of this.images) {
      const img = new Image();
      img.src = src;
    }
  }

  showLightbox(index: number) {
    this.currentImageIndex = index;
  }

  closeLightbox() {
    this.currentImageIndex = null;
  }

  navigate(direction: number) {
    if (this.currentImageIndex !== null) {
      this.currentImageIndex += direction;
      // Loop around if navigating beyond the start or end of the array
      if (this.currentImageIndex < 0) {
        this.currentImageIndex = this.images.length - 1;
      } else if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }
  }
}
