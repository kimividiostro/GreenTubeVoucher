import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseApiUrl, xMasterKey } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  constructor(private http: HttpClient) { }

  getVoucherVenues(): Observable<Location[]> {
    return this.http.get<Location[]>(
      `${baseApiUrl}/b/631aee46a1610e63862444c0`,
      {headers: {'X-Master-Key': xMasterKey}});
  }
}
