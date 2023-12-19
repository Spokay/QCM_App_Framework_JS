import {Component, Input} from '@angular/core';
import {QcmsService} from "../qcms-service/qcms.service";
import {QcmDetailsDto} from "../models/QcmDetailsDto";
import {QuestionComponent} from "../question/question.component";
import {NgForOf, NgIf} from "@angular/common";
import {async, asyncScheduler} from "rxjs";

@Component({
  selector: 'app-qcmdetail',
  standalone: true,
  imports: [QuestionComponent, NgForOf, NgIf],
  templateUrl: './qcmdetail.component.html',
  styleUrl: './qcmdetail.component.css'
})
export class QcmdetailComponent{
  public qcm?: QcmDetailsDto;

  constructor(private qcmService: QcmsService) {}
  @Input()
  set id(id: number) {
    this.qcmService.getQcmById(id).then((qcm: QcmDetailsDto) => this.qcm = qcm);
  }

}
