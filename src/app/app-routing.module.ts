import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent} from '../app/plantilla/header/header.component';
// import { FooterComponent} from '../app/plantilla/footer/footer.component';
import { LoginComponent} from '../app/vistas/login/login.component';
import { DashboardComponent} from '../app/vistas/dashboard/dashboard.component';
import { HomeComponent} from '../app/vistas/home/home.component';
import { ArriendoComponent} from '../app/vistas/arriendo/arriendo.component';
import { VigilanteGuard } from './guards/vigilante.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'arriendo', component: ArriendoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[VigilanteGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,HomeComponent]
