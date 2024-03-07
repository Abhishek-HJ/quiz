import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Or NoopAnimationsModule
import { MatSnackBarModule } from '@angular/material/snack-bar';
import swal from 'sweetalert';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarUserComponent } from './pages/user-page/sidebar-user/sidebar-user.component';
import { ViewQuizesUserComponent } from './pages/user-page/view-quizes-user/view-quizes-user.component';
import { UserDashboardComponent } from './pages/user-page/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    DashboardComponent,
    AddCategoryComponent,
    ViewCategoriesComponent,
    SidebarComponent,
    ProfileComponent,
    ViewQuizesComponent,
    HomeComponent,
    SidebarUserComponent,
    ViewQuizesUserComponent,
    UserDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
