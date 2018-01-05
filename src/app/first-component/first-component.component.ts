import { Component, OnInit } from '@angular/core';
import {HEROES} from '../heros.constants'

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
