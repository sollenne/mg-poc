import { Injectable } from '@angular/core';
import { MatSidenav, } from '@angular/material';

@Injectable()

export class SideNavService {
  public sidenav: MatSidenav;

  constructor(
  ) {}

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open = (): Promise<any> => {
    return this.sidenav.open();
  }

  public close = (): Promise<any> => {
    return this.sidenav.close();
  }

  public toggle = (): Promise<any> => {
    return this.sidenav.toggle();
  }
}
