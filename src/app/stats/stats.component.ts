import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data.service';
import { ValuesPipe } from '../values.pipe';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  pipes: [ValuesPipe]
})
export class StatsComponent implements OnInit {

    data: Observable<any[]>;
	loadstate: boolean;
	subscription: Subscription;

	constructor(data: DataService) {
        this.data = data.getData();
        this.loadstate = data.loadstate
        this.subscription = data.nameChange.subscribe((value) => { 
            this.loadstate = value; 
        });



  }

  ngOnInit() {
  }

    

  ngOnDestroy() {
  	//prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }



}
