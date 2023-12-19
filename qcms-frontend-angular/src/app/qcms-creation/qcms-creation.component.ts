import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {QcmsService} from "../qcms-service/qcms.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-qcms-creation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './qcms-creation.component.html',
  styleUrl: './qcms-creation.component.css'
})
export class QcmsCreationComponent{
  qcmForm: FormGroup;

  constructor(private fb:FormBuilder, private qcmService: QcmsService, private router: Router) {

    this.qcmForm = this.fb.group({
      name: '',
      theme: '',
      questions: this.fb.array([]),
    });
  }

  questions() : FormArray {
    return this.qcmForm.get("questions") as FormArray
  }
  answers(questionIndex:number) : FormArray {
    return this.questions().at(questionIndex).get("answers") as FormArray
  }

  newQuestion(): FormGroup {
    return this.fb.group({
      name: '',
      answers: this.fb.array([]),
    })
  }

  newAnswer(): FormGroup {
    return this.fb.group({
      name: '',
      isCorrect: false,
    })
  }

  addQuestion() {
    this.questions().push(this.newQuestion());
  }
  addAnswer(questionIndex:number) {
    this.answers(questionIndex).push(this.newAnswer());
  }

  removeQuestion(i:number) {
    this.questions().removeAt(i);
  }

  removeAnswer(questionIndex:number, answerIndex:number) {
    this.answers(questionIndex).removeAt(answerIndex);
  }

  onSubmit() {
    const body = this.qcmForm.value;

    this.qcmService.createQcm(body)
      .then(res =>
          this.router.navigate(
            ['/qcm/', res.id],
          )
      );
  }

}
