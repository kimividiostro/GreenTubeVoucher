import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VoucherService } from 'src/app/Services/voucher.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  locations$!: Observable<Location[]>;

  constructor(private voucherService: VoucherService) {}

  ngOnInit(): void {
    this.locations$ = this.voucherService.getVoucherVenues();
  }
}
