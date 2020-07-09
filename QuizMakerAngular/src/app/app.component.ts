import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'QuizMakerAngular';

  public slides = [
    { src: '../img/one.jpg' },
    { src: '../img/two.jpg' },
    { src: '../img/three.jpg' },
    { src: '../img/four.jpg' }
  ];
}

