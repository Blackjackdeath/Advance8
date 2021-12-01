import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainInfoAppComponent } from './main-info-app/main-info-app.component';
import { SkillsAppComponent } from './skills-app/skills-app.component';
import { ExperienceAppComponent } from './experience-app/experience-app.component';
import { SkillDescriptionComponent } from './skills-app/skill-description/skill-description.component';
import { ListProjectComponent } from './experience-app/list-project/list-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainInfoAppComponent,
    SkillsAppComponent,
    ExperienceAppComponent,
    SkillDescriptionComponent,
    ListProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
