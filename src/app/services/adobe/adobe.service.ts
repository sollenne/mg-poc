import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IAppConfig } from '../../interfaces/app-config';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AdobeService {
  public static appConfig: any;

  constructor(
    private http: HttpClient,
  ) { }
}
