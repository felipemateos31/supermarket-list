import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IList } from 'src/app/core/interfaces/backend-interfaces';
import { CoreService } from 'src/app/core/services/core.service';
import { IListItem } from '../../../core/interfaces/backend-interfaces';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  @Input() listId;
  @Output() refresh = new EventEmitter<IListItem>();

  itemForm: FormGroup;
  list: IList;

  isMenuOpen = false;


  get nameItem(): AbstractControl { return this.itemForm.get('nameItem'); }
  get quantity(): AbstractControl { return this.itemForm.get('quantity'); }
  get price(): AbstractControl { return this.itemForm.get('price'); }

  constructor(
    private coreService: CoreService,
    private formBuilder: FormBuilder,
  ) {

    this.itemForm = this.formBuilder.group({
      nameItem: ['', Validators.required],
      quantity: [''],
      price: [''],
    });

  }

  ngOnInit() {
    this.list = this.coreService.getList(this.listId);
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

    this.itemForm.reset();
    this.isMenuOpen = false;

    this.refresh.emit(itemList);

  }

  public toggleAccordion(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
