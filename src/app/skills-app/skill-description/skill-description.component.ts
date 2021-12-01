import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.scss'],
  animations: [
    trigger('moveRight', [
      state('start', style({
        width: '30px'
      })),
      state('end', style({
        width: '200px'
      })),
      transition('start=>end', animate(1000)),
      transition('end=>start', animate(1000))
    ]),
    trigger('showBlock', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start=>end', animate('1ms 2000ms linear')),
      transition('end=>start', animate(1))
    ])
  ]

})
export class SkillDescriptionComponent implements OnInit {
  arrow='❯';
  width='30px';
  animationState='start'
  animationShow ='start'

  @Input() skill: any;
  @Input() color: any;

  constructor() {
  }
  ngOnInit(): void {
    if (this.skill.skill==='Teamplayer'){
      this.arrow='❮';
      this.width='200px';
      this.animationState='end';
      this.animationShow='end';
    }
  };

  show(){
    if (this.arrow==='❯'){
      this.arrow='❮';
      this.animationState='end';
      this.animationShow='end';
    }
    else{
      this.arrow='❯';
      this.animationState='start'
      this.animationShow='start';
    }

  }
}
