import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  ) {
    this.list = this.coreService.getLists();
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
            // const listId = this.wishesService.crearLista(data.titulo);
            // this.router.navigateByUrl(`/tabs/tab1/list-items/${listId}`);
          }
        }
      ]
    });

    (await alert).present();
  }

  selectedList(listId: number) {
    this.router.navigateByUrl(`/tabs/tab1/list-items/${listId}`);
  }
}
