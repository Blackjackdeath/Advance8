import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAppComponent } from './skills-app.component';

describe('SkillsAppComponent', () => {
  let component: SkillsAppComponent;
  let fixture: ComponentFixture<SkillsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
