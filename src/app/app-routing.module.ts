import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherPurchaseComponent } from './components/voucher/voucher-purchase/voucher-purchase.component';
import { HomeComponent } from './components/home/home.component';
import { purchaseGuard } from './guards/purchase-guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { 
    path: 'purchase-voucher', 
    component: VoucherPurchaseComponent,
    canActivate: [purchaseGuard]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
