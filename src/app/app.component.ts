import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ConfigService } from './services/config/config.service';
import { MatSidenav, } from '@angular/material';
import { SideNavService } from './services/sidenav/sidenav.service';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
    private configService: ConfigService,
    private sidenavService: SideNavService,
  ) {
    this.configService.load();
  }

  public ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
