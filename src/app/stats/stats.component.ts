import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data.service';
import { Price } from '../price';


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

    private posts:Price[] = [];
    private errorMessage:any = '';

    getPosts() {
        this.data.getData()
        .subscribe(
            posts => this.posts = posts,
            error => this.errorMessage = <any>error);
        console.log('posts', this.posts);
    }

    ngOnInit() {
      this.getPosts();
    }

    

  ngOnDestroy() {
  	//prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }



}
