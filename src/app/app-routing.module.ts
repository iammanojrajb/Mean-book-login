import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogprofileComponent } from './logprofile/logprofile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', redirectTo:'', pathMatch:'full' },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'logprofile', component:LogprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
