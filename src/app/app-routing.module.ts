import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { TechnosListComponent } from './technos-list/technos-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-techno', component: TechnoAddComponent},
  {path: 'all-technos', component: TechnosListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
