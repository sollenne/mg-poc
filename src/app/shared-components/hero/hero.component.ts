import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { OracleService } from '../../services/oracle/oracle.service';

@Component({
  selector: 'mg-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})

export class HeroComponent implements OnInit {

  @Input() public imageId? = '';
  public imagePath: string;

  constructor(
    private configService: ConfigService,
    private oracleService: OracleService,
  ) { }

  ngOnInit() {
    this.imagePath = this.oracleService.getImagePath(this.imageId);
  }

}
