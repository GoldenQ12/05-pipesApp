import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{

  public items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items:[
              {
                label: 'Textos y fechas',
                routerLink: '/',
                icon: 'pi pi-align-left',
              },
              {
                label: 'Numeros',
                routerLink: 'numbers',
                icon: 'pi pi-dollar',
              },
              {
                label: 'No comunes',
                routerLink: 'uncommon',
                icon: 'pi pi-globe',
              },
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom Pipes',
                icon: 'pi pi-cog',
                routerLink: 'custom'
              }
            ]
          }
      ];
  }

}
