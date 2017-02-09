import { RouterModule, Routes }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery/app/angular2imagegallery.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2ImageGalleryModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    ResumeComponent,
    HomeComponent,
    BlogComponent,
    PhotoGalleryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
