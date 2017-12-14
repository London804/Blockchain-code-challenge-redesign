import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data.service';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  	data: Observable<any[]>;
	loadstate: boolean;
	subscription: Subscription;

	constructor(data: DataService) {
  	console.log(data);
    this.data = data.getData();
    // data.search();
    this.loadstate = data.loadstate
    this.subscription = data.nameChange.subscribe((value) => { 
      this.loadstate = value; 
    });
    console.log('loadstate', this.loadstate);


  }

  doSearch() {
  	// this.data.search();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  	//prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }



}
