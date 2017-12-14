import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
	API_URL: string = 'https://api.blockchain.info/price/index-series?base=btc&quote=USD&start=1503145039&scale=7200';
	results: Object[];
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

	getData(url = this.API_URL) {
 		this.showLoader();
 		console.log('showloader', this.loadstate);
 		return this.http.get(this.API_URL)
 			.map((res: Response) => 
 				res.json())
 			.catch(err => {
				console.error('handling error within getPhones()', err);
				const fakeData = [{ name: 'no phones could be loaded' }];
				return Observable.of(fakeData);
 			})
 			.finally(() => {
				this.hideLoader();
				console.log('hideloader', this.loadstate);
      });
   }

 //  	search() {
	//   let promise = new Promise((resolve, reject) => {
	//     let apiURL = 'https://api.blockchain.info/price/index-series?base=btc&quote=USD&start=1503145039&scale=7200';
	//     this.http.get(apiURL)
	//       .toPromise()
	//       .then(
 //        res => { // Success
 //        this.results = res.json().results;
 //        resolve();
 //        },
 //        msg => { // Error
 //        reject(msg);
 //        console.log('error', msg);
 //        });
	//   });
	//   return promise;
	// }

}
