import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']

})




export class LandingPageComponent implements OnInit {
  public slides = [
    { src: '/assets/img/one.jpg' },
    { src: '/assets/img/two.jpg' },
    { src: '/assets/img/three.jpg' },
    { src: '/assets/img/four.jpg' }
  ];

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {

  }

}
