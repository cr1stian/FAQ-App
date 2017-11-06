import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
questions:Question[];

  constructor() {

  }

  //Get Questions from localStorage
  getQuestions() {
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    } else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  //Add Question to localStorage
  addQuestion(question:Question){
    this.questions.unshift(question);

    //Init Local Var
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      // Push new Question
      questions.unshift(question);
      // Set new array to localStorage
      localStorage.setItem('questions', JSON.stringify(questions));

    } else{
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Re set localStorage
      localStorage.setItem('questions', JSON.stringify(questions))
    }
  }

  //Remove Question from localStorage
  removeQuestion(question){
    for(let i=0; i<this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions))
      }
    }
  }
}
