import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoatService {
counter : number=100;
  constructor() {}
  addone(){
    this.counter++;
  }
  
  }
