import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickCarosuelComponent } from './slick-carosuel.component';

describe('SlickCarosuelComponent', () => {
  let component: SlickCarosuelComponent;
  let fixture: ComponentFixture<SlickCarosuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickCarosuelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickCarosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
