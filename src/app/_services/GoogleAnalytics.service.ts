import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
  interface Window { gtag: any; }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-XXXXXXX', { page_path: event.urlAfterRedirects });
      }
    });
  }
}
