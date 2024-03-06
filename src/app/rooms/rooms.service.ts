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
      text: 'The spacious Deluxe Rooms are an excellent blend of style and comfort',
      guest: 2,
      bed: 2,
      bath: 1,
      img: 'https://images.pexels.com/photos/9007304/pexels-photo-9007304.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      price: 2000,
    },
    {
      id: 2,
      title: 'Royal Delux',
      text: 'The spacious Deluxe Rooms are an excellent blend of style and comfort',
      guest: 2,
      bed: 2,
      bath: 1,
      img: 'https://images.pexels.com/photos/8440280/pexels-photo-8440280.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      price: 3000,
    },
    {
      id: 3,
      title: 'Family Delux',
      text: 'The spacious Deluxe Rooms are an excellent blend of style and comfort',
      guest: 3,
      bed: 2,
      bath: 1,
      img: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      price: 4000,
    },
  ];
}
