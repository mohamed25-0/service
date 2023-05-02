import { Component } from '@angular/core';
import { GoatService } from '../goat.service';
@Component({
  selector: 'app-opps',
  templateUrl: './opps.component.html',
  styleUrls: ['./opps.component.css']
})
export class OppsComponent {
  constructor(public goat: GoatService){}
  Increase()
  {
    this.goat.addone();
  }
  }
  


