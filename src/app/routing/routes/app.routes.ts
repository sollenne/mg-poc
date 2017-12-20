/**
 * @angular
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/**
 * @resolves
 */
import {ConfigResolver} from '../resolves/config.resolver';

/**
 * @components
 */
import {HomepageComponent} from '../../views/homepage/homepage.component';
import {LoginpageComponent} from '../../views/loginpage/loginpage.component';
import {SendMoneyOnlineComponent} from "../../views/static-views/send-money-online/send-money-online.component";

const routes: Routes = [
  {
    path: 'account',
    component: LoginpageComponent,
    resolve: {
      config: ConfigResolver,
    },
  },
  {
    path: 'login',
    component: LoginpageComponent,
    resolve: {
      config: ConfigResolver,
    },
  },
  {
    path: 'home',
    component: HomepageComponent,
    resolve: {
      config: ConfigResolver,
    },
  },
  {
    path: 'send-money-online',
    component: SendMoneyOnlineComponent,
  },
  {
    path: '',
    component: HomepageComponent,
    resolve: {
      config: ConfigResolver,
    },
  },
  {
    path: '**',
    component: HomepageComponent,
    resolve: {
      config: ConfigResolver,
    },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
