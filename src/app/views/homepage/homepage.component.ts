import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CmsService } from '../../services/cms/cms.service';

@Component({
  selector: 'mg-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public moduleData: any;
  public homepage_hero = 'http://dmnanlx9028.adnp.intmgi.com:7003/sites/BlobServer?blobtable=MungoBlobs&blobwhere=1508791748788&blobkey=id&blobcol=urldata';

  constructor(
    private cmsService: CmsService,
  ) { }

  public ngOnInit(): void {
    this.getCmsModuleData();
  }

  public getCmsModuleData = (): Subscription => {

    return this.cmsService.getModuleData('MGIPOC_Module_C/1508791748872?assetDepth=3&fields=HeroImage,HeroText')
      .subscribe((res) => {
          this.moduleData = res;
          console.info(this.moduleData);
        },
        (err) => {
          console.warn(err);
        });

  }

}
