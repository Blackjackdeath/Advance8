import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.scss'],

})
export class SkillDescriptionComponent implements OnInit {
  arrow='❯';
  width='30px';
  visible='none';


  @Input() skill: any;
  @Input() color: any;

  constructor() {
  }
  ngOnInit(): void {
    if (this.skill.skill==='Teamplayer'){
      this.arrow='❮';
      this.width='200px';
      this.visible='block';
    }
  };

  show(){
    if (this.arrow==='❯'){
      this.arrow='❮';
      this.width='200px';
      this.visible='block';
    }
    else{
      this.arrow='❯';
      this.width='30px';
      this.visible='none';
    }

  }
}
