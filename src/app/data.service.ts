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

	getData(url):Observable<any> {
		console.log(url);
 		this.showLoader();
 		return this.http.get(url)
 			.map(this.extractData)
 			.catch(this.handleError)
 			.finally(() => {
				this.hideLoader();
    	});
    }

	public extractData(res) {
    	let body = res.json();
    	console.log('body', body);
    	return body;
	}

	public handleError(error:any) {
	    let errMsg = (error.message) ? error.message :
	        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	        console.log('Error', errMsg);
	        this.showLoader();
	    console.error('Error', errMsg); // log to console instead
	    return Observable.throw(errMsg);
	}


}
