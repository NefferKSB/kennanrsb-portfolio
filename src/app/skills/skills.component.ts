import { Component } from '@angular/core';
import { Skill_Row } from '../models/skill-row';

@Component ({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillRows: Skill_Row[];

  constructor() {
    this.skillRows = [
      {
        skillOne: 'Angular 11',
        percentageOne: '60%',
        styleOne: 'width: 60%;',
        skillTwo: 'TypeScript',
        percentageTwo: '70%',
        styleTwo: 'width: 70%;'
      },
      {
        skillOne: 'JavaScript',
        percentageOne: '75%',
        styleOne: 'width: 75%;',
        skillTwo: 'HTML, CSS',
        percentageTwo: '60%',
        styleTwo: 'width: 60%;'
      },
      {
        skillOne: 'NodeJS',
        percentageOne: '50%',
        styleOne: 'width: 50%;',
        skillTwo: 'MongoDB',
        percentageTwo: '50%',
        styleTwo: 'width: 50%;'
      },
      {
        skillOne: 'ServiceNow Scripting',
        percentageOne: '90%',
        styleOne: 'width: 90%;',
        skillTwo: 'ServiceNow Mobile Development',
        percentageTwo: '85%',
        styleTwo: 'width: 85%;'
      },
      {
        skillOne: 'ServiceNow ITSM Implementations',
        percentageOne: '60%',
        styleOne: 'width: 60%;',
        skillTwo: 'ServiceNow ITBM Impementations',
        percentageTwo: '30%',
        styleTwo: 'width: 30%;'
      }
    ]
  }
}
