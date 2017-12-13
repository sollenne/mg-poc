/**
 * @angular
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/**
 * @components
 */
import {HomepageComponent} from '../../views/homepage/homepage.component';
import {LoginpageComponent} from '../../views/loginpage/loginpage.component';

const routes: Routes = [
  {
    path: 'account',
    component: LoginpageComponent,
  },
  {
    path: 'login',
    component: LoginpageComponent,
  },
  {
    path: '**',
    component: HomepageComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
