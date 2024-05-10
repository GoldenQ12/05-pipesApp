import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {
  // * i18nSelect
  public name:string = 'Alexander';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }
  //* PluraliNg
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Eder', 'Carla', 'Iker', 'Ivan']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  public deleteClient():void{
    this.clients.pop()
  }

  //* KeyValue pipe

  public person = {
    name: 'Alexander',
    age:36,
    address: 'Ottawa, Canada'
  }

  //* Async pipe

  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap: ',value)))

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa')
    }, 3500);
  })

}
