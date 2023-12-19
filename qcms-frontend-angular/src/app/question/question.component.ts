import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Question} from "../models/Question";
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent{
  public questionForm = new FormGroup({});

  private _question?: Question;

  @ViewChild('answerContainer') answerContainer?: ElementRef;


  @Input() set question(value: Question) {
    if(value){
      this._question = value;
      const answers = [];
      for (let i = 0; i < value.answers.length; i++) {
        answers.push(new FormControl(false));
      }
      this.questionForm.addControl("answers", new FormArray(answers));
    }
  }
  get question(): Question | undefined {
    return this._question;
  }

  message: string = "";

  answerQuestion(){
    let userAnswers: boolean[] = this.questionForm.get("answers")!.value;
    this.question?.answers.forEach((questionAnswer, index) => {
      const answerElement = this.answerContainer!.nativeElement.children[index];
      // clear the elements if they were already answered
      answerElement.classList.remove("correct");
      answerElement.classList.remove("incorrect");
      answerElement.querySelector(".message")!.innerText = "";

      if(questionAnswer.isCorrect) {
        answerElement.classList.add("correct");
        if (userAnswers[index]) {
          answerElement.querySelector(".message")!.innerText = " correct ✔";
        }
      }else if (!questionAnswer.isCorrect && userAnswers[index]) {
        answerElement.querySelector(".message")!.innerText = " incorrect ✘";
        answerElement.classList.add("incorrect");
      }
    });
  }
}
