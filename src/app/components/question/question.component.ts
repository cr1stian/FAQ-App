import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';
import { DataService } from '../../services/data.service'; //setting DataService

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question:Question;

  constructor(public dataService:DataService) { } //setting DataService

  ngOnInit() {
  }

  removeQuestion(question){  //Removing question from dataService
    this.dataService.removeQuestion(question);
  }
}
