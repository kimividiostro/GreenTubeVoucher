import { Component } from '@angular/core';
import { VoucherService } from 'src/app/services/voucher.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  locations$ = this.voucherService.getVoucherVenues(50);

  constructor(private voucherService: VoucherService) {}
}
