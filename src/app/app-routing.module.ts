import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherPurchaseComponent } from './Components/Voucher/voucher-purchase/voucher-purchase.component';
import { HomeComponent } from './Components/Home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'purchase-voucher', component: VoucherPurchaseComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
