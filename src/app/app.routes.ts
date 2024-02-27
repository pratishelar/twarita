import { Routes } from '@angular/router';
import { RoomDetailsComponent } from './roomDetails/roomDetails.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'room/:index', component: RoomDetailsComponent },
];
