import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from "primeng/panel";
import { ToolbarModule } from 'primeng/toolbar';
import { Table, TableModule } from 'primeng/table';




@NgModule({
  exports:[
    ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
