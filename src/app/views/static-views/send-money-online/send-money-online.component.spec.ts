import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMoneyOnlineComponent } from './send-money-online.component';

describe('SendMoneyOnlineComponent', () => {
  let component: SendMoneyOnlineComponent;
  let fixture: ComponentFixture<SendMoneyOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMoneyOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMoneyOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
