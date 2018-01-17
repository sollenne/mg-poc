import { Component, OnInit } from '@angular/core';
import { AdobeService } from '../../services/adobe/adobe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  public moduleData: any;

  constructor(
    private adobeService: AdobeService,
  ) { }

  ngOnInit() {
    this.moduleData = this.getCmsModuleData();
  }

  public getCmsModuleData = (): Subscription => {

    return this.adobeService.getModuleData('//s3.us-east-2.amazonaws.com/adobe-poc-us-east-2/frags.model.tidy.json')
      .subscribe((res) => {
        this.moduleData = res;
        console.log(this.moduleData);
      },
      (err) => {
        console.warn(err);
      });

  }

}
