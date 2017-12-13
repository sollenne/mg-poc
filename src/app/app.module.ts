/**
 * @angular
 */
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


/**
 * @modules
 */
import { MaterialModule } from './modules/material.module';

/**
 * @routing
 */
import {routing} from './routing/routes/app.routes';

/**
 * @services
 */
import { CmsService } from './services/cms/cms.service';

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
import { AngularFittextModule } from 'angular-fittext';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
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
  ],
  providers: [
    CmsService,
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
