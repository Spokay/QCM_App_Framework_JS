import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QcmDetailsDto} from "../models/QcmDetailsDto";
import {QcmMapper} from "../models/QcmMapper";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root',
  useClass: QcmDetailsDto,
})
export class QcmsService {

  private apiUrl = "http://localhost:3000/qcms";

  constructor(private httpClient: HttpClient) { }

  public async getQcms(): Promise<QcmDetailsDto[]> {
    let response = this.httpClient.get(this.apiUrl + "/json", {responseType: 'json'});
    return await firstValueFrom(response).then((jsonData: any) => jsonData.map(QcmMapper.homeQcmFromJson));
  }

  public async getQcmById(id: number): Promise<QcmDetailsDto> {
    let response = this.httpClient.get(this.apiUrl + "/" + id, {responseType: 'json'});
    return await firstValueFrom(response).then(QcmMapper.detailsQcmFromJson);
  }

  public async createQcm(qcm: any): Promise<QcmDetailsDto> {
    console.log(qcm);
    let response = this.httpClient.post(
      this.apiUrl + "/new",
      qcm,
      {
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    return await firstValueFrom(response).then(QcmMapper.detailsQcmFromJson);
  }

}
