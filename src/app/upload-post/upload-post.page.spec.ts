import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadPostPage } from './upload-post.page';

describe('UploadPostPage', () => {
  let component: UploadPostPage;
  let fixture: ComponentFixture<UploadPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
