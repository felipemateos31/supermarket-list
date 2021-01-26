import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { CoreService } from '../core/services/core.service';
import { IList } from '../core/interfaces/backend-interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  list: IList[];

  constructor(
    private coreService: CoreService,
    private router: Router,
    private alertController: AlertController,
    private plt: Platform,
  ) {
    this.list = coreService.getLists();
  }

  async addNewList() {
    const alert = this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Agregar',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            const list: IList = {
              id: new Date().getTime(),
              titleList: data.titulo,
              creatAt: new Date(),
              endAt: null,
              complete: false,
              items: [],
              total: 0
            };
            const listId = this.coreService.createList(list);
            this.router.navigateByUrl(`/tabs/tab1/list-items/${listId}`);
          }
        }
      ]
    });
    (await alert).present();
  }

  selectedList(listId: number) {
    this.router.navigateByUrl(`/tabs/tab1/list-items/${listId}`);
  }

  deleteItem(flag: boolean) {
    this.list = this.coreService.getLists();
  }
}
