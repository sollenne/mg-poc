import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IAppConfig } from '../../interfaces/app-config';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ConfigService {
  public static appConfig: any;

  constructor(
    private http: HttpClient,
  ) { }

  public load = (): Promise<IAppConfig> => {
    if (ConfigService.appConfig) {
      return Promise.resolve(ConfigService.appConfig);
    } else {
      return new Promise((resolve) => {
        this.http.get(`${environment.configUrl}?v=${new Date().getTime()}`).map((res) => res)
          .subscribe((config) => {
            ConfigService.appConfig = config;
            resolve(ConfigService.appConfig);
          });
      });
    }
  }

}
