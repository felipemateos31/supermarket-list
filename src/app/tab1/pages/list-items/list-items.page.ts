import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IList } from 'src/app/core/interfaces/backend-interfaces';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.page.html',
  styleUrls: ['./list-items.page.scss'],
})
export class ListItemsPage implements OnInit {

  list: IList;

  constructor(
    private coreService: CoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.list = this.coreService.getList(id);
  }

  ngOnInit() {
  }



  onCompleteChange() {

  }

  deleteItem() {

  }

  addItem() {
    this.router.navigateByUrl(`/tabs/tab1/add-item/${this.list.id}`);
  }

}
