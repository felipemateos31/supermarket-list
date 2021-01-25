import { Injectable } from '@angular/core';
import { IList, IListItem } from '../interfaces/backend-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  public deleteList(list: IList) {

  }

  public getLists() {

    const lists: IList[] = [
      {
        id: 1,
        titleList: 'test',
        creatAt: new Date(),
        endAt: new Date(),
        complete: false,
        items: [],
        total: 0,
      },
    ];
    return lists;

  }

  public getList(id: number | string) {

    const itemList: IListItem[] = [
      {
        id: 1,
        description: 'Leche',
        price: 20,
        quantity: 2,
        complete: false,
      },
      {
        id: 2,
        description: 'Aceite',
        price: 10.20,
        quantity: 1,
        complete: true,
      },

    ];
    const list: IList =
    {
      id: 1,
      titleList: 'test',
      creatAt: new Date(),
      endAt: new Date(),
      complete: false,
      items: itemList,
      total: 0,
    };

    return list;
  }
}
