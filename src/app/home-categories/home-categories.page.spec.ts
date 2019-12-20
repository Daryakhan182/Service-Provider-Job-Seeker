import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCategoriesPage } from './home-categories.page';

describe('HomeCategoriesPage', () => {
  let component: HomeCategoriesPage;
  let fixture: ComponentFixture<HomeCategoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCategoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
