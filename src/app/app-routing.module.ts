import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { CovidComponent } from './covid/covid.component';
import { CountryComponent } from './covid/country/country.component';
import { AuthGuard } from './auth/login/auh.guard';




const routes: Routes =[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'login' ,component:LoginComponent},
  {path: 'home' ,component:HomeComponent},
  // {path: 'register' ,component:RegisterComponent},
  // {path: 'covid' ,component:CovidComponent},
  {path: 'home/:id',
  canActivate: [AuthGuard],
  component:HomeComponent},




];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
