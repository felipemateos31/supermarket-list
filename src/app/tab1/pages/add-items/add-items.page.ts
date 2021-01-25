import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IList } from 'src/app/core/interfaces/backend-interfaces';
import { CoreService } from '../../../core/services/core.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
})
export class AddItemsPage implements OnInit {

  list: IList;
  itemName: string;


  constructor(
    private coreService: CoreService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.list = coreService.getList(id);
  }

  ngOnInit() {
  }

  addItem() {

  }

  async onCompleteChange() {

    const alert = this.alertController.create({
      header: 'Complementar',
      inputs: [
        {
          name: 'cantidad',
          type: 'number',
          placeholder: 'Cantidad',
        },
        {
          name: 'precio',
          type: 'number',
          placeholder: 'Precio',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (data) => {
            if (data.cantidad.length === 0) {
              data.cantidad = 1;
            }
            if (data.precio.length === 0) {
              data.precio = 0;
            }

            console.log(data);
            // const listId = this.wishesService.crearLista(data.titulo);
            // this.router.navigateByUrl(`/tabs/tab1/add-items/1`);
          }
        }
      ]
    });

    (await alert).present();
  }

  deleteItem() {

  }

}
