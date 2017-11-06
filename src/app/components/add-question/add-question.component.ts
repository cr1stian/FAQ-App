import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>(); //sending inputted values out to parent component
  text:string;
  answer:string;


  constructor() { }

  ngOnInit() {
  }

  addQuestion(){ //grabbing inputted values
    this.questionAdded.emit({text:this.text, answer:this.answer, hide:true})
  }

}
