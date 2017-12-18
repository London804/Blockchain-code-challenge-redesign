import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data.service';
// import { Price } from '../price';


@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

    dataC: Observable<any[]>;
	loadstate: boolean;
	subscription: Subscription;


	constructor(private data: DataService) {
        // this.dataC = data.getData();
        this.loadstate = data.loadstate
        this.subscription = data.nameChange.subscribe((value) => { 
            this.loadstate = value; 
        });

  }

    private price: any = '';
    private errorMessage: any = '';

    getPrice() {
        this.data.getMarketPriceData()
        .subscribe(
            price => this.price = price,
            error => this.errorMessage = <any>error);
    }

    
    private size: any = '';

    getBlockSize() {
        this.data.getBlockSizeData()
        .subscribe(
            size => this.size = size.toFixed(2),
            error => this.errorMessage = <any>error);
    }

    private transactions: any = '';

    getTransactions() {
        this.data.getTransactions()
        .subscribe(
            transactions => this.transactions = transactions.values[0].y.toLocaleString(),
            error => this.errorMessage = <any>error);
    }

    private mempool: any = '';

    getMempool() {
        this.data.getMempoolSize()
        .subscribe(
            mempool => this.mempool = Math.trunc(mempool.values[0].y).toLocaleString(),
            error => this.errorMessage = <any>error);
    }




    ngOnInit() {
      this.getPrice();
      this.getBlockSize();
      this.getTransactions();
      this.getMempool();
    }

    

  ngOnDestroy() {
  	//prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }



}
