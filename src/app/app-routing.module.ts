import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleGuard } from './shared/guards/role.guard';
import { ExpiredProductModel } from './shared/models/expiredProductModel';
import { RoleModelComponent } from './shared/models/role-model/role-model.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRoles: RoleModelComponent.AdminPage,
    },
  },
  {
    path: 'boughtProducts',
    component: ProductsBoughtComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRoles: RoleModelComponent.UserPage,
    },
  },
  {
    path: 'expiredProducts',
    component: AllExpiredProductsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRoles: RoleModelComponent.UserPage,
    },
  },
  {
    path: 'yourProducts',
    component: YourProductsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRoles: RoleModelComponent.UserPage,
    },
  },
  {
    path: 'createProduct',
    component: CreateProductComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRoles: RoleModelComponent.UserPage,
    },
  },
  { path: 'allProducts', component: AllProductsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
