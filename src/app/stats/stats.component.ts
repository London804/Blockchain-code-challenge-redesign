import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data.service';


@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
    private price: any = '';
    private errorMessage_price: any = '';
    private size: any = '';
    private errorMessage_size: any = '';
    private transactions: any = '';
    private errorMessage_transactions: any = '';
    private mempool: any = '';
    private errorMessage_mempool: any = '';

    API_Price: string = "https://api.blockchain.info/stats?format=json&cors=true";
    API_Block_Size: string = "https://api.blockchain.info/q/24hravgblocksize?cors=true";
    API_Transactions: string = "https://api.blockchain.info/charts/n-transactions?timespan&cors=true&format=json&lang=en";
    API_Mempool: string = "https://api.blockchain.info/charts/mempool-size?timespan=4minutes&format=json&cors=true";

    loadstate: boolean;
    subscription: Subscription;


  constructor(private data: DataService) {
        this.loadstate = data.loadstate;
        this.subscription = data.nameChange.subscribe((value) => {
            this.loadstate = value;
        });
    }

    getPrice() {
        this.data.getData(this.API_Price)
        .subscribe( 
            price => this.price = price,
            error => this.errorMessage_price = <any>error);

    }

    getBlockSize() {
        this.data.getData(this.API_Block_Size)
        .subscribe(
            size => this.size = size.toFixed(2),
            error => this.errorMessage_size = <any>error);
    }

    getTransactions() {
        this.data.getData(this.API_Transactions)
        .subscribe(
            transactions => this.transactions = transactions.values.slice(-1)[0].y.toLocaleString(),
            error => this.errorMessage_transactions = <any>error);
    }

    getMempool() {
        this.data.getData(this.API_Mempool)
        .subscribe(
            mempool => this.mempool = Math.trunc(mempool.values[0].y).toLocaleString(),
            error => this.errorMessage_mempool = <any>error);
    }


    ngOnInit() {
      this.getPrice();
      this.getBlockSize();
      this.getTransactions();
      this.getMempool();
    }

    
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}
