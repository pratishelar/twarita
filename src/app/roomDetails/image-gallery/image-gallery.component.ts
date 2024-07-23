import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { room } from '../../rooms/rooms.service';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent implements OnInit{
  @Input() roomPhotos!: room;

  currentImageIndex: number | null = null;

  ngOnInit() {
   
  }

}
