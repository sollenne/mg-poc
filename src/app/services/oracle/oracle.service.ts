/**
 * Meant to pull objects from oracle
 * Leads to some difficulty because of the hectic
 * JSON structure that is returned from this.getModuleData() fn.
 * .
 * JSON must be parsed internally before compile
 * or externallly before compile for best results.
 * Otherwise we must fetch JSON, then parse for URL's etc to call
 * other resources.
 * .
 * Isaac W & Rich S determine not to spend too
 * much time creating a middleware app for this.
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

export class OracleService implements OnInit {
  private imagePath: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {

  }

  public ngOnInit(): void {
    this.configService.load();
    this.imagePath = `${ConfigService.appConfig.PATH_ROOT}${ConfigService.appConfig.PATH_IMAGES}`;
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

  public getModuleData = (PATH_MODULE: string): Observable<any> => {
    console.log(ConfigService.appConfig);

    return this.http.get(`${ConfigService.appConfig.PATH_ROOT}${ConfigService.appConfig.PATH_SITE}${PATH_MODULE}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  public getImagePath = (IMAGE_ID: string): string => {
    return `${this.imagePath}${IMAGE_ID}&blobkey=id&blobcol=urldata`;
  }

  public fetchDataFromOracleWebCenter = (module: string): Subscription => {
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
