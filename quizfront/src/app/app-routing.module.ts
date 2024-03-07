import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { UserDashboardComponent } from './pages/user-page/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { ViewQuizesUserComponent } from './pages/user-page/view-quizes-user/view-quizes-user.component';

const routes: Routes = [
  {
    path: 'signup', component: SignupComponent, pathMatch: 'full',
  },

  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },

  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },


  {
    path: 'admin', component: DashboardComponent,

    children: [{
      path: 'profile', component: ProfileComponent
    },

    {
      path: '', component: WelcomeComponent
    },

    {
      path: 'categories', component: ViewCategoriesComponent
    },

    {
      path: 'add-category', component: AddCategoryComponent
    },

    {
      path: 'quizzes', component: ViewQuizesComponent
    }]
  },

  {
    path: 'user', component: UserDashboardComponent,
    children: [{
      path: 'quiz', component: ViewQuizesUserComponent
    }]
  },

  {
    path: 'login', component: LoginComponent,
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
