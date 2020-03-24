import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  selectMenuItem: EventEmitter<number> = new EventEmitter();

  menuList: MenuItem[] = [
    {id: 1, description: 'home', selected: true},
    {id: 2, description: 'lista giochi', selected: true},
    {id: 3, description: 'modifica gioco', selected: true},
  ];
   
  constructor() { }

  ngOnInit(): void {
  }
  
  slectedComponent(id: number){
    this.selectMenuItem.emit(id);
  }

}
