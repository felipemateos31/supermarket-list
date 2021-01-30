import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IList } from 'src/app/core/interfaces/backend-interfaces';
import { CoreService } from 'src/app/core/services/core.service';
import { IListItem } from '../../../core/interfaces/backend-interfaces';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  itemForm: FormGroup;
  list: IList;

  get nameItem(): AbstractControl { return this.itemForm.get('nameItem'); }
  get quantity(): AbstractControl { return this.itemForm.get('quantity'); }
  get price(): AbstractControl { return this.itemForm.get('price'); }



  constructor(
    private coreService: CoreService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,

  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.list = coreService.getList(id);

    this.itemForm = this.formBuilder.group({
      nameItem: ['', Validators.required],
      quantity: [''],
      price: [''],
    });
  }

  ngOnInit() {
  }

  onItemFormSubmit() {
    let cost = 0;
    if (this.price.value && this.quantity.value) {
      cost = this.price.value * this.quantity.value;
    }
    const itemList: IListItem = {
      id: new Date().getTime(),
      description: this.nameItem.value,
      price: this.price.value,
      quantity: this.quantity.value,
      total: cost,
      complete: false
    };
    this.list.items.push(itemList);
    this.coreService.saveData();
    this.router.navigate(['/app/tab1/list-items/' + this.list.id]);
}

}
