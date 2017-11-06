import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Question } from '../../models/question'; //Import Question (interface) to reference data structure

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:Question[]; //Delcared questions to be an Array of Question (interface)

  constructor(public dataService:DataService) {  }  //setting DataService

  ngOnInit() {
    this.questions = this.dataService.getQuestions(); //grabbing values from data service to display
  }

  addQuestion(question:Question){ //adding values to the dataService from add question component
    this.dataService.addQuestion(question);
  }
}
