import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainInfoAppComponent } from './main-info-app/main-info-app.component';
import { SkillsAppComponent } from './skills-app/skills-app.component';
import { ExperienceAppComponent } from './experience-app/experience-app.component';
import { SkillDescriptionComponent } from './skills-app/skill-description/skill-description.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInfoAppComponent,
    SkillsAppComponent,
    ExperienceAppComponent,
    SkillDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
