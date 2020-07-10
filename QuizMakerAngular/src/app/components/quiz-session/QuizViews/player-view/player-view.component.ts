import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Models/question';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {

  question: Question;
  ngOnInit(): void {
  }

}
