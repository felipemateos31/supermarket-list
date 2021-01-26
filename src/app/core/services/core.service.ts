import { Injectable } from '@angular/core';
import { IList, IListItem } from '../interfaces/backend-interfaces';
import { Storage } from '@ionic/storage';
import { title } from 'process';
import { createHostListener } from '@angular/compiler/src/core';
import { async } from '@angular/core/testing';
import { Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public lists: IList[] = [];

  constructor(
    private storage: Storage,
  ) {
    this.loadData();
  }


  public deleteList(list: IList) {
    this.lists = this.lists.filter(data => data.id !== list.id);
    this.saveData();
  }

  public getLists() {
    return this.lists;
  }

  public getList(id: number | string) {
    id = Number(id);
    return this.lists.find(data => data.id === id);
  }

  public createList(list: IList) {
    this.lists.push(list);
    this.saveData();
    return list.id;
  }

  public loadData() {
    const getItems = async () => {
      await this.storage.forEach((v, key, i) => {
        if (key.startsWith('data')) {
          for (const item of v) {
            this.lists.push(item);
          }
        }
      });
    };
    getItems();
  }

  public saveData() {
    this.storage.set('data', this.lists);
  }

}
