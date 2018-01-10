/**
 * @angular
 */
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**
 * @modules
 */
import { MaterialModule } from './modules/material.module';
import { AngularFittextModule } from 'angular-fittext';

/**
 * @routing
 * @resolves
 */
import {routing} from './routing/routes/app.routes';
import { ConfigResolver } from './routing/resolves/config.resolver';

/**
 * @pipes
 */
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';

/**
 * @services
 */
import { ConfigService } from './services/config/config.service';
import { OracleService } from './services/oracle/oracle.service';
import { ContentfulService } from './services/contentful/contentful.service';
import { SideNavService } from './services/sidenav/sidenav.service';
import { AdobeService } from './services/adobe/adobe.service';

/**
 * @components
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { SidenavComponent } from './shared-components/sidenav/sidenav.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LivechatComponent } from './shared-components/livechat/livechat.component';
import { LoginComponent } from './shared-components/login/login.component';
import { LoginpageComponent } from './views/loginpage/loginpage.component';
import { HeroComponent } from './shared-components/hero/hero.component';
import { SendMoneyOnlineComponent } from './views/static-views/send-money-online/send-money-online.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    routing,
    AngularFittextModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomepageComponent,
    LivechatComponent,
    LoginComponent,
    LoginpageComponent,
    HeroComponent,
    MdToHtmlPipe,
    SendMoneyOnlineComponent,
  ],
  providers: [
    OracleService,
    ContentfulService,
    ConfigService,
    ConfigResolver,
    SideNavService,
    AdobeService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
