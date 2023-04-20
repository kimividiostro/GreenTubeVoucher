import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { vendorsUrl } from 'src/environment';
import { Location } from '../Components/voucher/models/location';
import { LocationsDTO } from '../Components/voucher/models/DTO/locations-dto';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  private voucherVendors = new Map<number, Location[]>();

  constructor(private http: HttpClient) {}

  getVoucherVenues(voucherValue: number): Observable<Location[]> {
    const voucherVendors = this.voucherVendors.get(voucherValue);
    if(voucherVendors) 
      return of(voucherVendors);

    return this.http.get<LocationsDTO>(vendorsUrl).pipe(
      tap(res => this.voucherVendors.set(voucherValue, res.record.venues)),
      map(res => res.record.venues)
    );
  }

}
