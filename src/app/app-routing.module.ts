import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthentificationComponent } from './auth-components/authentification/authentification.component';
import { LoginComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { HomeComponent } from './home/home.component';
import { AllExpiredProductsComponent } from './product-components/all-expired-products/all-expired-products.component';
import { AllProductsComponent } from './product-components/all-products/all-products.component';
import { CreateProductComponent } from './product-components/create-product/create-product.component';
import { ProductComponent } from './product-components/product/product.component';
import { YourProductsComponent } from './product-components/your-products/your-products.component';
import { ProductsBoughtComponent } from './products-bought/products-bought.component';
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
  { path: 'product', component:ProductComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
