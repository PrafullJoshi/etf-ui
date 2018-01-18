import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SharedServie {

    apBaseUrl: string = 'http://localhost:10007/';
    sponsorerBaseUrl: string = 'http://localhost:10010/';
    notaryBaseUrl: string = 'http://localhost:10004/';
    partyBaseUrl: string = 'http://localhost:10013/';

    data: any;

    constructor(
        public http: HttpClient
    ) {

    }

    setData(data: any) {
        this.data = data;
    }

    getData(): any {
        return this.data;
    }

    getAPName(): Observable<any> {
        return this.http.get(this.apBaseUrl + 'api/info/me');
            
    }

    getNotaryName(): Observable<any> {
        return this.http.get(this.notaryBaseUrl + 'api/info/me');
            
    }
    getSponsorerName(): Observable<any> {
        return this.http.get(this.sponsorerBaseUrl + 'api/info/me');
            
    }

    issueBasket(basketHash): Observable<any> { // api/cp-basket/issue?basketIpfsHash=testbasket1
        return this.http.get(this.apBaseUrl + 'api/cp-basket/issue?basketIpfsHash='
            + basketHash);
            
    }

    issueEtf(selectedFund, quantity): Observable<any> { // /api/cp-etf/issue?etfName=TestETF&etfCode=VOO&quantity=500
        return this.http.get(this.sponsorerBaseUrl + 'api/cp-etf/issue?etfName='
            + selectedFund + '&etfCode=' + selectedFund + '&quantity=' + quantity);
            
    }

    getIssuedBaskets(): Observable<any> {
        return this.http.get(this.apBaseUrl + 'api/cp-basket/get');
    }

    getIssuedETFs(): Observable<any> {
        return this.http.get(this.sponsorerBaseUrl + 'api/cp-etf/get');
    }

    getReceivedBaskets(): Observable<any> {
        return this.http.get(this.sponsorerBaseUrl + 'api/cp-basket/get');
    }

    getPeers(): Observable<any> {
        return this.http.get(this.partyBaseUrl + 'api/info/peers');
    }

    getNotaryData(): Observable<any> {
        return this.http.get(this.notaryBaseUrl+'api/notary/get-data');
    }

    transferBasket(basket: any): Observable<any> {
        // http://localhost:10007/api/cp-basket/move?basketIpfsHash=testbasket1&party=Sponsorer
        let basketIpfsHash = basket.state.data.basketIpfsHash;
        return this.http.get(this.apBaseUrl+'api/cp-basket/move?basketIpfsHash='
            + basketIpfsHash + '&party=Vanguard');
    }

    transferEtf(etf: any): Observable<any> {
        // http://localhost:10010/api/cp-etf/move?etfCode=VOO&party=AuthorizedParticipant
        let etfCode = etf.state.data.etfCode;
        return this.http.get(this.sponsorerBaseUrl+'api/cp-etf/move?etfCode='
            + etfCode + '&party=Credit-Suisse');
    }

    getIssuedETFsForAP(): Observable<any> {
        return this.http.get(this.apBaseUrl + 'api/cp-etf/get');
    }
}