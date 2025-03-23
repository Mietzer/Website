import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbuttonComponent } from './headerbutton.component';

describe('HeaderbuttonComponent', () => {
  let component: HeaderbuttonComponent;
  let fixture: ComponentFixture<HeaderbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
