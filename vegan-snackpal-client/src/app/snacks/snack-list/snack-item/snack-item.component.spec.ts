import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackItemComponent } from './snack-item.component';

describe('SnackItemComponent', () => {
  let component: SnackItemComponent;
  let fixture: ComponentFixture<SnackItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
