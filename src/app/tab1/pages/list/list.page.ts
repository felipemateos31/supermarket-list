import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IList } from 'src/app/core/interfaces/backend-interfaces';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: IList[];

  constructor(
    private coreService: CoreService,
    private router: Router,
    private alertController: AlertController,
  ) {
    this.list = coreService.getLists();
  }

  ngOnInit() {
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
            this.router.navigate(['/app/tab1/list-items/' + listId]);
          }
        }
      ]
    });
    (await alert).present();
  }

  selectedList(listId: number) {
    this.router.navigate(['/app/tab1/list-items/' + listId]);
  }

  deleteItem(flag: boolean) {
    this.list = this.coreService.getLists();
  }

}
