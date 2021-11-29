import { Component, OnInit} from '@angular/core';

import {ResumeInfoService} from "../resume-info.service";
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-skills-app',
  templateUrl: './skills-app.component.html',
  styleUrls: ['./skills-app.component.scss'],
  animations: [
    trigger('moveRight', [
      state('start', style({
        width: '30px'
      })),
      state('end', style({
        width: '200px'
      }))
    ])
  ]
})
export class SkillsAppComponent implements OnInit {

  constructor(private skill:ResumeInfoService) { }
  softSkill=this.skill.skillSoftArr;
  hardSkill=this.skill.skillHardArr;
  ngOnInit(): void {
  }


}
