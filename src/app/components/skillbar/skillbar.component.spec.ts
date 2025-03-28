import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillbarComponent } from './skillbar.component';

describe('SkillbarComponent', () => {
  let component: SkillbarComponent;
  let fixture: ComponentFixture<SkillbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
