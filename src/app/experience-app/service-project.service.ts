import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProjectService {
  projectArr=[
    {imageUrl: 'https://stroika12.com/wp-content/uploads/2017/10/stroyka-doma.jpg', descriptionProject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus velit sit amet viverra faucibus. In ornare mollis metus et luctus. Praesent egestas convallis elementum. Mauris vel mauris nibh. Phasellus semper orci odio, a sollicitudin nulla blandit eget. Proin in orci aliquam, feugiat mi non, laoreet felis. Nullam velit ligula, porttitor et consequat ut, laoreet non nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. ' },
    {imageUrl: 'https://www.cadvilla.com/wp-content/uploads/hausplaner.png', descriptionProject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus velit sit amet viverra faucibus. In ornare mollis metus et luctus. Praesent egestas convallis elementum. Mauris vel mauris nibh. Phasellus semper orci odio, a sollicitudin nulla blandit eget. Proin in orci aliquam, feugiat mi non, laoreet felis. Nullam velit ligula, porttitor et consequat ut, laoreet non nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. ' },
    {imageUrl: 'https://proekt-sam.ru/wp-content/uploads/narisovanniy-proekt-doma-405x300.jpg', descriptionProject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus velit sit amet viverra faucibus. In ornare mollis metus et luctus. Praesent egestas convallis elementum. Mauris vel mauris nibh. Phasellus semper orci odio, a sollicitudin nulla blandit eget. Proin in orci aliquam, feugiat mi non, laoreet felis. Nullam velit ligula, porttitor et consequat ut, laoreet non nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. ' }
  ]
  constructor() { }

  getArrProject(){
    return this.projectArr;
  };

  getArrLength(){
    return this.projectArr.length;
  };

  createProject(projectName:any) :any{
    if (typeof (projectName)!== undefined){
      return this.projectArr.push(Object.assign({}, projectName));
    };
    return ;
  };

  removeProject(index:number){
    if (typeof (index)!== undefined){
      return this.projectArr.splice(index,1);
    };
    return ;
  }
  updateProject(index:number, info:string){
    return this.projectArr[index].descriptionProject=info;
  }
}
