import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    loadstate: boolean;
    subscription: Subscription;

  constructor(private data: DataService) { 

    this.loadstate = data.loadstate;
        this.subscription = data.nameChange.subscribe((value) => {
            this.loadstate = value; 
        });

    // this.data.componentMethodCalled$.subscribe(
    //     () => {
    //       alert('(Component2) Method called!');
    //     }
    //   );
    // }
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }

}
