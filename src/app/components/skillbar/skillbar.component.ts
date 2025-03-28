import { Component } from '@angular/core';

@Component({
  selector: 'app-skillbar',
  imports: [],
  templateUrl: './skillbar.component.html',
  styleUrl: './skillbar.component.css'
})
export class SkillbarComponent {

  skills = [
    { name: "HTML", projects: "Website", logo: "HTML.svg"},
    { name: "CSS", projects: "Website", logo: "CSS.svg"},
    { name: "JavaScript", projects: "Website", logo: "JAVASCRIPT.svg"},
    { name: "TypeScript", projects: "Website", logo: "TYPESCRIPT.svg"},
    { name: "Angular", projects: "Website", logo: "ANGULAR.ico"},
    { name: "C#", projects: "MTGApp", logo: "CSHARP.svg"},
    { name: "Java", projects: "MTGApp", logo: "JAVA.svg"},
    { name: "Python", projects: "MTGApp", logo: "PYTHON.svg"},
    { name: "MySQL", projects: "MTGApp", logo: "MYSQL.svg"},
    {name: "Visual Studio Code", projects: "Website", logo: "VISUALSTUDIOCODE.svg"},
    { name: "Visual Studio", projects: "MTGApp", logo: "VISUALSTUDIO.svg"},
    { name: "IntelliJ", projects: "MTGApp", logo: "INTELLIJ.svg"},
  ]


  constructor() {}

}
