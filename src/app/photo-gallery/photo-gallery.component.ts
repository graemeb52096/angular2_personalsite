import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  images = [
    "../../assets/china_town1.jpg",
    "../../assets/paris_grocery.jpg",
    "../../assets/game_of_chess.jpg",
    "../../assets/background_pic.jpg",
    "../../assets/china_town2.jpg",
    "../../assets/alley.jpg",
    "../../assets/harbord.jpg",
    "../../assets/eh.jpg",
  ];
  constructor() { }

  ngOnInit() {
  }

}
