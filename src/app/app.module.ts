import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HairSalonComponent } from './pages/hair-salon/hair-salon.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    GalleryComponent,
    HairSalonComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
