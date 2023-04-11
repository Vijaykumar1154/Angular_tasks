import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {
  @ViewChild('slideshow') slideshow!: ElementRef;
  images = ["http://localhost/image2.jpg","http://localhost/image1.jpg","http://localhost/image3.jpg"];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.slideshow.nativeElement.src = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  }
}
