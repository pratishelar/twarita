import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomDetailsComponent } from './roomDetails/roomDetails.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'room/:index', component: RoomDetailsComponent },
];
