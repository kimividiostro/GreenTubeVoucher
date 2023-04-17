import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { baseApiUrl, xMasterKey } from 'src/environment';
import { Location } from '../Components/Voucher/Models/Location';
import { LocationsDTO } from '../Components/Voucher/Models/Locations-dto';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  constructor(private http: HttpClient) { }

  getVoucherVenues(): Observable<Location[]> {
    return this.http.get<LocationsDTO>(
      `${baseApiUrl}/b/631aee46a1610e63862444c0`,
      {headers: {'X-Master-Key': xMasterKey}}).pipe(
        map(response => response.record.venues)
      );
  }
}
