import { Component } from '@angular/core'

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})

export class MenuComponent{
  menuCategories:Array<string> = ['Procesory', 'Karty graficzne', 'Pamięci RAM', 'Dyski SSD', 'Dyski HDD'];


}
