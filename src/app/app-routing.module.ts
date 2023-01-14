import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
 {path: '', redirectTo: 'layout', pathMatch: 'full'},
 {path: 'layout', component: LayoutComponent},
 {path: 'home', component: HomeComponent},
 {path: 'login', component:LoginComponent},
 {path: 'registro', component:RegistroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
