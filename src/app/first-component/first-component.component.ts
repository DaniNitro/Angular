import { Component, OnInit } from '@angular/core';
import {HEROES} from '../heros.constants'
import { Hero } from '../hero';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  heroes = HEROES;

  selectedHero : Hero;
  constructor() { }

  ngOnInit() {
  }
  clickedHero(hero : Hero) : void{
    this.selectedHero = hero;
  }
}
