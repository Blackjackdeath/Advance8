import { Component, OnInit } from '@angular/core';

import {ResumeInfoService} from '../resume-info.service';
import {ServiceProjectService } from '../experience-app/service-project.service'
@Component({
  selector: 'app-main-info-app',
  templateUrl: './main-info-app.component.html',
  styleUrls: ['./main-info-app.component.scss']
})
export class MainInfoAppComponent implements OnInit {


  constructor( private infoProfile: ResumeInfoService, private project:ServiceProjectService) { }
  info=this.infoProfile.info;
  count=this.project.getArrLength();
  ngOnInit(): void {
  }

}
