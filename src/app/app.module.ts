import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthentificationComponent } from './auth-components/authentification/authentification.component'; 
import { LoginComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product-components/product/product.component';
import { AllProductsComponent } from './product-components/all-products/all-products.component';
import { ProductsBoughtComponent } from './products-bought/products-bought.component'; 
import { RoleModelComponent } from './shared/models/role-model/role-model.component';
import { AdminComponent } from './admin/admin.component';
import { DialogLogoutComponent } from './dialogs/dialog-logout/dialog-logout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { JwtModule } from '@auth0/angular-jwt';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPubSubModule } from '@pscoped/ngx-pub-sub';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductComponent,
    AllProductsComponent,
    ProductsBoughtComponent,
    RoleModelComponent,
    AdminComponent,
    DialogLogoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    JwtModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    NgxPubSubModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:7041'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
