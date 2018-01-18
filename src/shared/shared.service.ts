import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SharedServie {

    apBaseUrl: string = 'http://172.23.178.177:10007/';
    sponsorerBaseUrl: string = 'http://localhost:10010/';
    notaryBaseUrl: string = 'http://localhost:10004/';

    constructor(
        public http: HttpClient
    ) {

    }

    getAPName(): Observable<any> {
        return this.http.get(this.apBaseUrl + 'api/info/me');
            
    }

    issueBasket(basketHash): Observable<any> {
        return this.http.get(this.apBaseUrl + 'api/security-basket/issue?basketIpfsHash='
            + basketHash + '&party=AuthorizedParticipant');
            
    }
}