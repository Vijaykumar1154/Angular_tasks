import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartBoxComponent } from './cartpage/cart-box/cart-box.component';

const routes: Routes = [
  {path:"",component: CartBoxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
