import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepositePage } from './deposite.page';

describe('DepositePage', () => {
  let component: DepositePage;
  let fixture: ComponentFixture<DepositePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
