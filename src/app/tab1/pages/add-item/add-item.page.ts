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
    const itemList: IListItem = {
      id: 0,
      description: this.itemForm.controls.nameItem.value,
      price: this.itemForm.controls.price.value,
      quantity: this.itemForm.controls.quantity.value,
      complete: false
    };
    this.list.items.push(itemList);
    this.coreService.saveData();

    this.router.navigateByUrl(`/tabs/tab1/list-items/${this.list.id}`);
  }

}
