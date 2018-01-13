import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ngbdCarouselBasicConstant } from './ngdb-carousel-basic.constant';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './ngbd-carousel-basic.component.html',
  styleUrls: ['./ngbd-carousel-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgbdCarouselBasicComponent implements OnInit {
	NGDB = ngbdCarouselBasicConstant;


  constructor() { }

  ngOnInit() {

  }

}
