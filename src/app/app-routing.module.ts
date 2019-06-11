import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductSearchComponent} from './product-search/product-search.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductAddComponent} from './product-add/product-add.component';

const routes: Routes = [
  //{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'search', component: ProductSearchComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addProduct', component: ProductAddComponent},
  {path: 'editProduct', component: ProductAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
