import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproductsdetailsComponent } from './newproductsdetails.component';

describe('NewproductsdetailsComponent', () => {
  let component: NewproductsdetailsComponent;
  let fixture: ComponentFixture<NewproductsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproductsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewproductsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
