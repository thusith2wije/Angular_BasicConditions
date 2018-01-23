import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'Toyota','BMW','TATA'
  ];

  myData(){
    return 'This is my Data Man';
  }

}
