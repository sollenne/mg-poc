import { Pipe, PipeTransform } from '@angular/core';
import { ContentfulService } from '../services/contentful/contentful.service';

@Pipe({
  name: 'mdToHtml'
})

export class MdToHtmlPipe implements PipeTransform {

  constructor(
    private contentfulService: ContentfulService,
  ) {}

  transform(value: any, args?: any): any {
    return this.contentfulService.markdownToHtml(value);
  }

}
