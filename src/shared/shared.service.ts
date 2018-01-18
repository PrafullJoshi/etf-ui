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


    constructor(
        public http: HttpClient
    ) {

    }

    getAPName(): Observable<any> {
        return this.http.get(this.apBaseUrl + 'api/info/me');
            
    }

    getNotaryName(): Observable<any> {
        return this.http.get(this.notaryBaseUrl + 'api/info/me');
            
    }

    issueBasket(basketHash): Observable<any> {
        return this.http.get(this.apBaseUrl + 'api/security-basket/issue?basketIpfsHash='
            + basketHash + '&party=AuthorizedParticipant');
            
    }

    getIssuedBaskets(): Observable<any> {
        return this.http.get(this.apBaseUrl + 'api/security-basket/get');
    }

    getPeers(): Observable<any> {
        return this.http.get(this.partyBaseUrl + 'api/info/peers');
    }

    getNotaryData(): Observable<any> {
        return this.http.get(this.notaryBaseUrl+'api/notary/get-data');
    }
}