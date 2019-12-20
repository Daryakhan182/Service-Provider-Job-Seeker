import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayPostsPage } from './display-posts.page';

describe('DisplayPostsPage', () => {
  let component: DisplayPostsPage;
  let fixture: ComponentFixture<DisplayPostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
