import { Injectable } from '@angular/core';
import { GameItem } from '../models/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private gameListStored: GameItem[]= [
    {id: 1, description: 'CupHead', rated: 12, price: 19.99,imgName:"",}
  ];
  constructor() { }

  getGameList(){
    return this.gameListStored;
  }

  getGame(id: number): GameItem {
    return this.gameListStored.find(item =>{
      return item.id === id;
    });
  }
}
