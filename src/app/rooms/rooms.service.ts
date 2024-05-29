import { Injectable } from '@angular/core';

export interface room {
  id: number;
  title: string;
  text: string;
  guest: number;
  bed: number;
  bath: number;
  img: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}

  rooms: room[] = [
    {
      id: 1,
      title: 'Delux',
      text: 'Step into our Deluxe Room, where contemporary elegance meets ultimate comfort. Thoughtfully designed with modern amenities and stylish decor, this room type is perfect for solo travelers or couples seeking a cozy retreat.',
      guest: 2,
      bed: 1,
      bath: 1,
      img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 2500,
    },
    {
      id: 2,
      title: 'Super Delux',
      text: 'Upgrade to our Super Deluxe Room for an extra touch of luxury and sophistication. Spacious and beautifully appointed, these rooms exude an air of exclusivity, perfect for discerning travelers looking for an elevated experience.',
      guest: 2,
      bed: 1,
      bath: 1,
      img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 3000,
    },
    {
      id: 3,
      title: 'Royal Delux',
      text: 'For the epitome of luxury living, our Royal Deluxe Room sets the standard for opulence and grandeur. Designed to evoke a sense of regal splendor, these palatial suites offer a sanctuary of unparalleled comfort.',
      guest: 3,
      bed: 2,
      bath: 1,
      img: 'https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 3500,
    },
  ];
}
