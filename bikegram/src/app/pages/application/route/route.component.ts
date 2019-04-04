import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  routes = [{
    id: Date.now(),
    title: 'Alvaro Simarro',
    image: '../../../../assets/images/map.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing and typesetting industry, dummy text of the printing and typesetting industry.'
  }];

  constructor() { }

  ngOnInit() {
  }

}
