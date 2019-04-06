import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

  public navLinks = [
    {path: '/', label: 'Home'},
    {path: '/accommodation', label: 'Accommodation'},
    {path: '/offers', label: 'Offers'},
    {path: '/food-and-beverage', label: 'Food & Beverage'},
    {path: '/lifestyle', label: 'Lifestyle'},
    {path: '/celebrations', label: 'Celebrations'},
    {path: '/weddings', label: 'Weddings'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
