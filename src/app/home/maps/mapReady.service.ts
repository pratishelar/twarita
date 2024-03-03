import { PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  private loaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  loadScript(apiKey: string): Promise<void> {
    // Safe to access document here

    return new Promise((resolve, reject) => {
      if (this.loaded) {
        resolve();
        return;
      }
      if (isPlatformBrowser(this.platformId)) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
          this.loaded = true;
          resolve();
        };
        script.onerror = (error) => {
          reject(error);
        };
      }
    });
  }
}
