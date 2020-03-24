import { Component, OnInit } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GameItem[]= []

  constructor( private listService: GameListService) {
    this.gameList = this.listService.getGameList();
  }
  ngOnInit(): void {
  }
}
