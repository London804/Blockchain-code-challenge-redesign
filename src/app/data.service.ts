import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Price } from './price';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class DataService {
	API_Price: string = "https://api.blockchain.info/stats?format=json&cors=true";
	API_Block_Size: string = "https://api.blockchain.info/q/24hravgblocksize?cors=true";
	API_Transactions: string = "https://api.blockchain.info/charts/n-transactions?timespan=24hours&cors=true&format=json&lang=en"
	API_Mempool: string = "https://api.blockchain.info/charts/mempool-size?timespan=4minutes&format=json&cors=true"
	loadstate: boolean;
	nameChange: Subject<boolean> = new Subject<boolean>();


 	constructor(private http: Http) {
		this.loadstate = false;
	}

	private showLoader(): void {
		this.loadstate = true;
	    this.nameChange.next(this.loadstate);
	}

	private hideLoader(): void {
	    this.loadstate = false;
	    this.nameChange.next(this.loadstate);
	}

	getMarketPriceData(url = this.API_Price):Observable<any> {
 		this.showLoader();
 		return this.http.get(this.API_Price)
 			.map(this.extractData)
 			.catch(this.handleError)
 			.finally(() => {
				this.hideLoader();
    	});
    }

	getBlockSizeData(url = this.API_Block_Size):Observable<any> {
 		this.showLoader();
 		return this.http.get(this.API_Block_Size)
 			.map(this.extractData)
 			.catch(this.handleError)
 			.finally(() => {
				this.hideLoader();
    	});
    }

    getTransactions(url = this.API_Transactions):Observable<any> {
 		this.showLoader();
 		return this.http.get(this.API_Transactions)
 			.map(this.extractData)
 			.catch(this.handleError)
 			.finally(() => {
				this.hideLoader();
    	});
    }

    getMempoolSize(url = this.API_Mempool):Observable<any> {
 		this.showLoader();
 		return this.http.get(this.API_Mempool)
 			.map(this.extractData)
 			.catch(this.handleError)
 			.finally(() => {
				this.hideLoader();
    	});
    }

	private extractData(res) {
    	let body = res.json();
    	console.log('body', body);
    	return body;
	}

	private handleError(error:any) {
	    let errMsg = (error.message) ? error.message :
	        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	    console.error('Error', errMsg); // log to console instead
	    return Observable.throw(errMsg);
	}


}
