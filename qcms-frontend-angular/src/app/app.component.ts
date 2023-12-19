import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QcmsService} from "./qcms-service/qcms.service";
import {HttpClientModule} from "@angular/common/http";
import {QuestionComponent} from "./question/question.component";
import {QcmdetailComponent} from "./qcmdetail/qcmdetail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, HttpClientModule, QuestionComponent, QcmdetailComponent, FormsModule,
    ReactiveFormsModule],
  providers: [QcmsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qcms-frontend-angular';
}
