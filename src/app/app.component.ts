import { Component } from '@angular/core';
import {ConfigService} from './services/config/config.service';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  constructor(
    private configService: ConfigService,
  ) {
    this.configService.load();
  }

}
