import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IList } from 'src/app/core/interfaces/backend-interfaces';
import { CoreService } from 'src/app/core/services/core.service';
import { IListItem } from '../../../core/interfaces/backend-interfaces';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage implements OnInit {

  list: IList;
  totalList = 0;

  public itemsForm: FormGroup;
  get items(): FormArray { return this.itemsForm.get('items') as FormArray; }

  constructor(
    private coreService: CoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.list = this.coreService.getList(id);

    if (this.list.items.length > 0) {
      this.totalList = this.list.total;
    }

    this.itemsForm = this.formBuilder.group({
      items: this.formBuilder.array([]),
    });

    this.setItem(this.list.items);

  }

  ngOnInit() {
  }

  setItem(items: IListItem[]) {
    if (items) {
      for (const item of items) {
        const itemControls = this.formBuilder.group({
          id: item.id,
          description: item.description,
          price: item.price,
          quantity: item.quantity,
          total: item.total,
          complete: item.complete,
        });
        this.items.push(itemControls);
      }
    }
  }

  onCompleteChange(item) {
    let cost = 0;

    if (item.total) {
      cost = item.total;
    } else if (item.price && item.quantity) {
      cost = item.price * item.quantity;
    } else if (item.price && !item.quantity) {
      cost = item.price;
    }

    if (item.complete) {

      const itemList = this.list.items.find(itemComplete => itemComplete.id === item.id);

      itemList.complete = item.complete;
      itemList.price = item.price;
      itemList.quantity = item.quantity;
      itemList.total = cost;

      this.totalList = this.totalList + cost;
    } else {

      const itemList = this.list.items.find(itemComplete => itemComplete.id === item.id);

      itemList.complete = item.complete;
      itemList.price = item.price;
      itemList.quantity = item.quantity;
      itemList.total = cost;

      this.totalList = this.totalList - cost;
    }

    this.list.total = this.totalList;


    const pendientes = this.list.items.filter(selected => !selected.complete).length;

    if (pendientes === 0) {
      this.list.endAt = new Date();
      this.list.complete = true;
    } else {
      this.list.endAt = null;
      this.list.complete = false;
    }

    this.coreService.saveData();

  }

  deleteItem(index, item) {

    this.list.items = this.list.items.filter(filter => filter.id !== item.id);
    this.items.removeAt(index);

    this.coreService.saveData();
  }

  addItem() {
    this.router.navigate([`/app/tab1/add-item/${this.list.id}`]);
  }

}
