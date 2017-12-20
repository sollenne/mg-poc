import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ConfigService } from '../config/config.service';

@Injectable()

export class CmsService {
  private imagePath: string;

  constructor(
    private http: HttpClient,
  ) {

    this.imagePath = `${ConfigService.appConfig.PATH_ROOT}${ConfigService.appConfig.PATH_IMAGES}`;
  }

  private extractData = (res: Response) => {
    try {
      const body = Object.entries(res);
      return body || [];
    } catch (err) {
      return [];
    }
  }

  private handleError = (error: any): ErrorObservable => {
    if (error && error.name === 'TimeoutError') {
      return Observable.throw('TimeoutError');
    } else {
      const body = JSON.parse(error._body);
      const httpSubCode = body.error.httpSubCode;
      const errMsg = {
        message: body.error.message,
        subCode: body.error.subCode,
        responseBody: body,
      };

      if (httpSubCode) {
        return Observable.throw(httpSubCode);
      }
      return Observable.throw(errMsg);
    }
  }

  public getModuleData = (PATH_MODULE: string): Observable<any> => {
    console.info(ConfigService.appConfig);

    return this.http.get(`${ConfigService.appConfig.PATH_ROOT}${ConfigService.appConfig.PATH_SITE}${PATH_MODULE}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  public getImagePath = (IMAGE_ID: string): string => {
    return `${this.imagePath}${IMAGE_ID}&blobkey=id&blobcol=urldata`;
  }

}
