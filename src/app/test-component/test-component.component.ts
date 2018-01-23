import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  myObject = {
    gender: 'male',
    age: 23,
    location: 'USA'
  };  

  myArr = ['Dog','Cat','Cow','Elephent'];
  otherTmpl = 'Its error';

  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';

  buttonStatus = false;
  buttonStatus_1 = 'enabled';

  myEvent(event){
    console.log(event);
  }

  title = 'Hello Bunny';
  titleClass = 'red-title';
  
  ABC = false;
  ABCD = {
    'b-title':  true,
    'c-title': true
  }
  ngOnInit() {
  }

}
