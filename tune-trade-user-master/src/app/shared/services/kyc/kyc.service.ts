import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KycRequest } from '../../models';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class KycService {
  mainUrl = environment.url;
  urlForKyc = {
    sendKyc: this.mainUrl + 'kycrequest',
     verify: this.mainUrl + 'verifystatus',
    verifyApplication: this.mainUrl + 'getapprovedkyc'
  };
  constructor(private http: HttpClient) { }

  sendKycForm( kycData: KycRequest ): Observable<any> {
    return this.http.post<any>(this.urlForKyc.sendKyc, kycData);
  }
  VerifyKycForm( kycData: any ): Observable<any> {
    return this.http.post<any>(this.urlForKyc.verify, kycData);
  }
  getKycForm( kycData: any ): Observable<any> {
    return this.http.post<any>(this.urlForKyc.verifyApplication, kycData);
  }
}
