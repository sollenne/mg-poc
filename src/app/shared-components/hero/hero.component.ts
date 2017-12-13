import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'mg-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: ['mg-hero { display:block; width: 100%;}'],
})

export class HeroComponent implements OnInit {

  @Input() public imgPath? = '';

  constructor() { }

  ngOnInit() {
  }

}
