import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ConfigService } from '../../services/config/config.service';
import { CmsService } from '../../services/cms/cms.service';

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
    private cmsService: CmsService,
  ) { }

  ngOnInit() {
    this.imagePath = this.cmsService.getImagePath(this.imageId);
  }

}
