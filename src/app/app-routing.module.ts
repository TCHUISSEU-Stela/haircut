import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HairSalonComponent } from './pages/hair-salon/hair-salon.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "hairSalon",
    component: HairSalonComponent
  },
  {
    path: "about",
    component:AboutComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
