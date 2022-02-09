import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
  path:"",
  component:LoginComponent
  },
  {
  path:"login",
  component:LoginComponent
},
{
  path: '',
  component: LayoutComponent,
  children: [
    {path: 'dashboard',  component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'adduser', component: AddUserComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
