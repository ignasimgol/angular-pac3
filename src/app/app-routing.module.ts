import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/components/login.component';
import { CategoriesListComponent } from './Category/components/categories-list/categories-list.component';
import { CategoryFormComponent } from './Category/components/category-form/category-form.component';
import { DashboardComponent } from './Post/components/dashboard/dashboard.component';
import { HomeComponent } from './Post/components/home/home.component';
import { PostFormComponent } from './Post/components/post-form/post-form.component';
import { PostsListComponent } from './Post/components/posts-list/posts-list.component';
import { AuthGuard } from './Shared/Guards/auth.guard';
import { ProfileComponent } from './User/components/profile/profile.component';
import { RegisterComponent } from './User/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'posts',
    component: PostsListComponent,
    canActivate: [AuthGuard],
  },
  // Add route for user's posts list
  {
    path: 'user/posts',
    component: PostsListComponent,
    canActivate: [AuthGuard],
  },
  // Add a route for creating a new post (without ID)
  {
    path: 'user/post',
    component: PostFormComponent,
    canActivate: [AuthGuard],
  },
  // Keep the existing route for editing a post (with ID)
  {
    path: 'user/post/:id',
    component: PostFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: CategoriesListComponent,
    canActivate: [AuthGuard],
  },
  // Add a route for creating a new category (without ID)
  {
    path: 'user/category',
    component: CategoryFormComponent,
    canActivate: [AuthGuard],
  },
  // Keep the existing route for editing a category (with ID)
  {
    path: 'user/category/:id',
    component: CategoryFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  // Add the correct route for categories list
  {
    path: 'user/categories',
    component: CategoriesListComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}