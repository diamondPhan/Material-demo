import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewpetComponent } from './addnewpet/addnewpet.component';
import { CarditemComponent } from './carditem/carditem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"itemlist",component:ItemlistComponent},
  {path:"card",component:CarditemComponent},
  {path:"addnewpet",component:AddnewpetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
