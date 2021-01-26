import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

import { IList } from '../../core/interfaces/backend-interfaces';
import { CoreService } from '../../core/services/core.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @ViewChild(IonList) listInternal: IonList;

  @Input() lists: IList[];
  @Output() selected = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<boolean>();

  constructor(
    private coreService: CoreService,
    private router: Router,
    private alertController: AlertController
  ) {

  }

  ngOnInit() { }


  selectedList(list: IList) {
    this.selected.emit(list.id);
  }

  deleteList(list: IList) {
    this.coreService.deleteList(list);
    this.deleted.emit(true);
  }

  async editTitleList(list: IList) {
    const alert = this.alertController.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
          value: list.titleList,
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.listInternal.closeSlidingItems();
          }
        },
        {
          text: 'Guardar',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            list.titleList = data.titulo;
            this.coreService.saveData();
            this.listInternal.closeSlidingItems();
          }
        }
      ]
    });
    (await alert).present();
  }
}
