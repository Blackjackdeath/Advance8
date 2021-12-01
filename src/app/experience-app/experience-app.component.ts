import { Component, OnInit,} from '@angular/core';

import {ServiceProjectService} from './service-project.service'

@Component({
  selector: 'app-experience-app',
  templateUrl: './experience-app.component.html',
  styleUrls: ['./experience-app.component.scss']
})
export class ExperienceAppComponent implements OnInit {

  project={
    imageUrl:'',
    descriptionProject: ''
  };
  constructor(private projectInfo:ServiceProjectService) {
  }
  projectArr=this.projectInfo.getArrProject()
  ngOnInit(): void {

  }

  create(url:string, text:string){
    this.project.imageUrl=url;
    this.project.descriptionProject=text
    this.projectInfo.createProject(this.project);

  }

}
