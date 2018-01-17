/**
 * Meant to pull objects from adobe experience manager (AEM)
 * Leads to some difficulty because of the hectic
 * JSON structure that is returned from this.getModuleData() fn.
 */

import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ConfigService } from '../config/config.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()

export class AdobeService implements OnInit {
  public static appConfig: any;
  public adobeURL = '//author670.adobedemo.com/content/dam/moneygram/content/send-money/_jcr_content/data/master.tidy.json';

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) { }

  public ngOnInit(): void {
    this.configService.load();
  }

  private extractData = (res: Response) => {
    try {
      const body = res;
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

  public getModuleData = (module: string): Observable<any> => {
    console.log(ConfigService.appConfig);

    return this.http.get(module)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public fetchDataFromAdobeAEM = (module: string): Subscription => {
    return this.getModuleData(module)
      .subscribe((res) => {
          console.log(res);
          return res;
        },
        (err) => {
          console.warn(err);
        });
  }
}
