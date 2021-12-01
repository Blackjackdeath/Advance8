import { Component, OnInit, Input } from '@angular/core';

import { ServiceProjectService } from '../service-project.service'

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {

  @Input() project:any;
  @Input() index:any;

  projectArr: any;
  projectCount: any;
  showEditPanel: number=0;
  editArea:boolean =true;
  showResize:string ='80px';
  showAccept:string = 'none';
  constructor(private projectInfo:ServiceProjectService) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo(){
    this.projectArr=this.projectInfo.getArrProject();
    this.projectCount=this.projectInfo.getArrLength();
  }

  removeProject(index:number){
    return this.projectInfo.removeProject(index)
  }
  showPanel(){
    if (this.showEditPanel===0){
      this.showEditPanel=1;
    }
    else{
      if (this.editArea===true){
        this.showEditPanel=0;
      }
    }

  }
  editInfo(event:any){
    event.target.parentElement.parentElement.previousSibling.removeAttribute('disabled');
    event.stopPropagation();
    this.editArea=false;
  }
  checkEdit(event:any){
    if (this.editArea) {
      event.stopPropagation()
    }
  }
  changeAcceptShow(){
    this.showResize='110px';
    this.showAccept='block';
  }
  acceptChange(event:any, index:number){
    event.target.parentElement.parentElement.previousSibling.setAttribute('disabled','');
    this.projectInfo.updateProject(index,event.target.parentElement.parentElement.previousSibling.value);
    this.showEditPanel=0;
    event.stopPropagation();
  }
}
