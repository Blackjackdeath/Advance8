import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeInfoService {
  info={
    name: 'Ivan',
    surname: 'Illich',
    family: 'Hapak',
    dateBirth: '1989-09-15',
    telephone: '+38(096) 619-96-47',
    email: 'blackjack.death@gmail.com',
    linkedIn: 'www.linkedin.com/in/ivan-hapak'
  };
  skillSoftArr=[
      {
      skill:'Teamplayer',
      description: 'Worked seven years in different teams in army.',
      color: '#F08080FF'
    },
    {
      skill:'Communication',
      description: 'Always find common language with my subordinates and directors. But don'+`'`+'t very like speak in front of an audience.',
      color: '#7CFC00FF'
    },
    {
      skill:'Self Management',
      description: 'Three years i commanded three small bases and decided many different tasks.',
      color: '#87CEFAFF'
    },
    {
      skill:'Learn & Improve',
      description: 'I independently studied many army specialization and now i studi Front-End.',
      color: '#FFFF00FF'
    },
    {
      skill:'Responsibility',
      description: 'Five years i was command my squad and one of them i command infantry company. For all time my squad performed combat missions.',
      color: '#7FFF00FF'
    },
    {
      skill:'Time Management',
      description: 'Service in the army is a continuous time management.',
      color: '#00FFFFFF'
    },
    {
      skill:'Creative',
      description: 'I planted many military operation, some was successful other not. But for my opinion when all came back alive this is successful operation.',
      color: '#FF1493FF'
    }]
  skillHardArr=[
      {
      skill:'HTML/CSS/SCSS',
      description: 'In all my projects i use HTML/CSS/SCSS. And you may evaluate my skills.',
        color: '#5c9fc7'
    },
      {
        skill:'Figma',
        description: 'I use it only to create pages.',
        color: '#f3a965'
      },
      {
        skill:'JavaScript/JQueri',
        description: 'In all my pet-project i use JS and in some i uses JQueri.',
        color: '#62c54a'
      },
      {
        skill:'Git',
        description: 'I use only for my pet-projects and don'+`'`+'t use in really work.',
        color: '#d34747'
      },
      {
        skill:'Node.Js',
        description: 'Build simple server.',
        color: '#6ed9a2'
      },
      {
        skill:'Angular 2+',
        description: 'Basic knowledge.',
        color: '#996eda'
      }
    ];
  constructor() { }
}
