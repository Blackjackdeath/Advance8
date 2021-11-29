import { Component, OnInit } from '@angular/core';

import {ResumeInfoService} from '../resume-info.service';
@Component({
  selector: 'app-main-info-app',
  templateUrl: './main-info-app.component.html',
  styleUrls: ['./main-info-app.component.scss']
})
export class MainInfoAppComponent implements OnInit {


  constructor( private infoProfile: ResumeInfoService) { }
  info=this.infoProfile.info;

  ngOnInit(): void {
  }

}
