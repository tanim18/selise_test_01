import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './First/First.component';
import { ListItemComponent } from './List-Item/List-Item.component';

const routes: Routes = [
  { path: 'list-item', component: ListItemComponent },
  { path: 'first-component', component: FirstComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }