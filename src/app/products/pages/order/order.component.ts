import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUppercase: boolean = false;

  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
    name: 'Superman',
    canFly: true,
    color: Color.blue
    },
    {
    name: 'Robin',
    canFly: false,
    color: Color.green
    },
    {
    name: 'Linterna Verde',
    canFly: true,
    color: Color.green
    },
    {
    name: 'Batman',
    canFly: false,
    color: Color.black
    },

]


  toggleUpercase():void{
    this.isUppercase = !this.isUppercase;

  }

  changeOrder(value: keyof Hero):void{
    this.orderBy = value;
  }

  //* ADDITIONAL FEATURE


  public colorsMap = {
    '=0': 'Rojo',
    '=1': 'Negro',
    '=2': 'Azul',
    '=3': 'Verde',
    'other': 'Color no definido'
  }
}
