import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class CmsService {
  private PATH_ROOT = 'http://dmnanlx9028.adnp.intmgi.com:7003/sites/';
  private PATH_SITE = 'REST/resources/v1/aggregates/MGIPOC/';

  constructor(
    private http: HttpClient,
  ) { }

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
   return this.http.get(`${this.PATH_ROOT}${this.PATH_SITE}${PATH_MODULE}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
