import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingListsPage } from './pending-lists.page';

describe('PendingListsPage', () => {
  let component: PendingListsPage;
  let fixture: ComponentFixture<PendingListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingListsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
