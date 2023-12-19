import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QcmdetailComponent} from "./qcmdetail/qcmdetail.component";
import {QcmsCreationComponent} from "./qcms-creation/qcms-creation.component";

export const routes: Routes = [
  {
    path: 'qcm/create',
    component: QcmsCreationComponent,
    pathMatch: 'full'
  },
  {
    path: 'qcm/:id',
    component: QcmdetailComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
];
