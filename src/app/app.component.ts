import { Component } from '@angular/core';//import component from Angular 44 core lib
import {DataService} from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation',[state('small',style({
      transform: 'scale(1)',
    })),
    state('large', style({
      transform: 'scale(1.2)',
    })),
    transition('small <=> large',animate('100ms ease-in',
    //style({transform: 'translateY(40px)'})
   keyframes([
    style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
    style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
    style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
  ])
  )),
  ]), 
  ]
  
})
export class AppComponent {
  title = 'Application';

  constructor(private dataService:DataService){
    
  }
  
  someProperty:string = '';
  state: string='small';
  animateMe(){
    this.state= (this.state==='small' ? 'large':'small');
  }

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }
 
}
 