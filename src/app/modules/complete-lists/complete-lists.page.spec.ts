import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompleteListsPage } from './complete-lists.page';

describe('CompleteListsPage', () => {
  let component: CompleteListsPage;
  let fixture: ComponentFixture<CompleteListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteListsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompleteListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
