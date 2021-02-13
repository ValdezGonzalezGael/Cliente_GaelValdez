import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ContactComponent } from './shared/contact/contact.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'dashboard', component: DashboardComponent},
{ path: 'home', component: HomeComponent },
{ path: '', pathMatch:'full',redirectTo:'/home' },
{ path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
