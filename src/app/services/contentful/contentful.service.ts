import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import * as marked from 'marked';

@Injectable()

export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token,
  });

  constructor() { }

  public logContent = (contentId: string): void => {
    this.client.getEntry(contentId)
    .then((entry) => console.log(entry));
  }

  public getContent = (contentId: string): Observable<any> => {
    const promise = this.client.getEntry(contentId);
    return Observable.fromPromise(promise).map(entry => entry.fields);
  }

  public markdownToHtml = (md: string): any => {
    return marked(md);
  }

}
