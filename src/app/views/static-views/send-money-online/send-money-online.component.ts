import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../../../services/contentful/contentful.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mg-send-money-online',
  templateUrl: './send-money-online.component.html',
  styleUrls: ['./send-money-online.component.scss']
})
export class SendMoneyOnlineComponent implements OnInit {

  public lesson$: Observable<any>;
  public lesson: any;

  constructor(
    private contentfulService: ContentfulService,
  ) { }

  ngOnInit() {
    this.contentfulService.logContent('5KsDBWseXY6QegucYAoacS');
    this.lesson$ = this.contentfulService.getContent('5KsDBWseXY6QegucYAoacS');
  }

}
