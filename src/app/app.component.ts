import { Component } from '@angular/core';
import { GoatService } from './goat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public goat: GoatService){}
  Increase()
  {
    this.goat.addone();
  }
  }

