import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
  public nameLowercase: string = 'alexander'
  public nameUppercase: string = 'ALEXANDER'
  public fullName: string = 'aLeXander sAlgaDo'

  public customDate: Date = new Date()
}
