import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBusComponent } from './select-bus.component';

describe('SelectBusComponent', () => {
  let component: SelectBusComponent;
  let fixture: ComponentFixture<SelectBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectBusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
