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
  photos: any;
}

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}

  rooms: room[] = [
    {
      id: 1,
      title: 'Standard Delux',
      text: 'Step into our Super Ultra Room, where contemporary elegance meets ultimate comfort. Thoughtfully designed with modern amenities and stylish decor, this room type is perfect for solo travelers or couples seeking a retreat.',
      guest: 2,
      bed: 1,
      bath: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive2.JPG?alt=media&token=8a12ebd0-2c35-4ea1-8e04-e3b0ce15a60a',
      price: 2500,
      photos: [
        { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-1.JPG?alt=media&token=ed43d24d-4329-4347-8244-e92304b32b40' },
        { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-2.JPG?alt=media&token=9cfcec0e-029d-4711-a652-5a66ab35a9fe' },
        { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-3.JPG?alt=media&token=ff35c736-f65a-46a8-851b-8ccd37703fcd' },
        { id: 4, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-4.JPG?alt=media&token=886bcbbb-35c4-4d95-b0f2-986d90815f6b' },
        { id: 5, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-5.JPG?alt=media&token=504a44b7-9f76-4c08-bae7-670d6117b97b' },
        { id: 7, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-7.JPG?alt=media&token=b1f6c745-a787-406b-bed3-29e64455e3c7' },
        { id: 8, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-8.JPG?alt=media&token=e7df3c7b-5b27-48fa-b417-0094546f2caa' },
        { id: 9, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-9.JPG?alt=media&token=eb1a6f0c-3464-46e0-82e5-0707022ba66e' },
        { id: 10, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-10.JPG?alt=media&token=e03ed4dc-493f-467c-8d6c-306f6f0a3a96' }
      ],
    },
    {
      id: 2,
      title: 'Super Delux',
      text: 'Upgrade to our Super Deluxe Room for an extra touch of luxury and sophistication. Spacious and beautifully appointed, these rooms exude an air of exclusivity, perfect for discerning travelers looking for an elevated experience.',
      guest: 2,
      bed: 1,
      bath: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fsuper-4.JPG?alt=media&token=886bcbbb-35c4-4d95-b0f2-986d90815f6b',
      price: 3000,
      photos: [
        { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-2.JPG?alt=media&token=bca26efa-a931-41ce-a2e3-8b2bfa25ca09' },
        { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-3.JPG?alt=media&token=410c616c-d2ad-4ab6-a3db-291f877df314' },
        { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-4.JPG?alt=media&token=36de8dd0-f48e-4ef7-a45f-13df46a2f6f0' },
        { id: 4, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-5.JPG?alt=media&token=8410cba1-e5e5-46bb-be2f-01f8cded9419' },
        { id: 5, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-6.JPG?alt=media&token=4e4b2df8-c72f-4327-a311-f8ad15a6ac70' },
        { id: 6, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-7.JPG?alt=media&token=b9f12c12-9ee5-42fb-91c5-aa4de3f1a146' },
        { id: 7, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-8.JPG?alt=media&token=342ecb28-606c-427c-838f-85f31c68680d' },
        { id: 8, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-9.JPG?alt=media&token=fdda01bc-d327-48cc-a5cf-277a4251aef3' },
        { id: 9, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-11.JPG?alt=media&token=61fc2e3a-3fe9-4315-b0ad-0d65261f87c0' },
        { id: 10, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Froyal-13.JPG?alt=media&token=96e9ae70-dd49-44d3-9cd9-8106f5c25f94' }
      ],
    },
    {
      id: 3,
      title: 'Royal Deluxe',
      text: 'For the epitome of luxury living, our Royal Deluxe Room sets the standard for opulence and grandeur. Designed to evoke a sense of regal splendor, these palatial suites offer a sanctuary of unparalleled comfort.',
      guest: 3,
      bed: 2,
      bath: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive-1.JPG?alt=media&token=dabe16d8-2d94-4a2e-b5b1-ebb8bb19097e',
      price: 3500,
      photos: [
        { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive-1.JPG?alt=media&token=dabe16d8-2d94-4a2e-b5b1-ebb8bb19097e' },
        { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive2.JPG?alt=media&token=8a12ebd0-2c35-4ea1-8e04-e3b0ce15a60a' },
        { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive3.JPG?alt=media&token=efe2dc3a-339f-4ddd-8214-06440daa7e79' },
        { id: 4, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive4.JPG?alt=media&token=4e609ad9-d812-4924-8107-3fc729342111' },
        { id: 5, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive5.JPG?alt=media&token=526d2a59-4570-4141-87f9-55005f3019cc' },
        { id: 6, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive6.JPG?alt=media&token=6adc5397-ad57-41e1-b135-a6139b974554' },
        { id: 7, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fexecutive7.JPG?alt=media&token=088ecf99-8a10-420d-84e4-8281bc5379ea' },
        { id: 8, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fcommon-8.JPG?alt=media&token=9d8efb9f-5f3a-47aa-a28e-a7dc7c12b4a2' },
        { id: 9, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fcommon-6.JPG?alt=media&token=fcc0b7be-4d8a-496c-8907-3bbd5e7258fd' },
        { id: 10, url: 'https://firebasestorage.googleapis.com/v0/b/twarita-f1ea4.appspot.com/o/Twarita%20Lodge%20Photo%2Fcommon-5.JPG?alt=media&token=afe42420-f5bf-43ae-ba55-4522115110eb' },
      ],
    },
  ];
}
