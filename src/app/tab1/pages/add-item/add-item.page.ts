import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  itemForm: FormGroup;

  get nameItem(): AbstractControl { return this.itemForm.get('nameItem'); }
  get quantity(): AbstractControl { return this.itemForm.get('quantity'); }


  constructor(
    private coreService: CoreService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.itemForm = this.formBuilder.group({
      nameItem: ['', Validators.required],
      quantity: [''],
      price: [''],
    });
  }

  ngOnInit() {
  }

  onItemFormSubmit() {
    console.log(this.itemForm.value);

  }

}
