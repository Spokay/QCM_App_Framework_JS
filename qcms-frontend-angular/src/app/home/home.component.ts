import {Component, OnInit} from '@angular/core';
import {QcmsService} from "../qcms-service/qcms.service";
import {QcmDetailsDto} from "../models/QcmDetailsDto";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  qcms: QcmDetailsDto[] = [];
  constructor(private qcmsService: QcmsService) {

  }

   ngOnInit(): void {
    this.qcmsService.getQcms().then((qcms: QcmDetailsDto[]) => this.qcms = qcms)
  }

  trackById(index: number, item: QcmDetailsDto): number {
    return item.id;
  }

}
