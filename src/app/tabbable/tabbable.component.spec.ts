import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbableComponent } from './tabbable.component';

describe('TabbableComponent', () => {
  let component: TabbableComponent;
  let fixture: ComponentFixture<TabbableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
