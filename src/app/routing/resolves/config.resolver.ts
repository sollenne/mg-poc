import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { ConfigService } from '../../services/config/config.service';

@Injectable()

export class ConfigResolver implements Resolve<any> {

  constructor(
    private configService: ConfigService,
  ) {}

  public resolve(): Promise<any> {
      if (ConfigService.appConfig) {
        return Promise.resolve(ConfigService.appConfig);
      }
      return this.configService.load();
  }
}
