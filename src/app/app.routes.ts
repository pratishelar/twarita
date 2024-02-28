import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./home/home.component').then (m => m.HomeComponent) },
  { path: 'room/:index', loadComponent: () => import('./roomDetails/roomDetails.component').then (m => m.RoomDetailsComponent) },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule{}