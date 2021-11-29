import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAppComponent } from './experience-app.component';

describe('ExperienceAppComponent', () => {
  let component: ExperienceAppComponent;
  let fixture: ComponentFixture<ExperienceAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
