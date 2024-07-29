import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ThemeComponent } from './theme/theme.component';

export default [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      { path: 'recipes', component: RecipesComponent },
      { path: 'theme', component: ThemeComponent },
    ],
  },

  // TODO: notFoundComponent
] as Routes;
