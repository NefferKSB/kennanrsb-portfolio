import { Component } from '@angular/core';
import { Education_Entry } from '../models/education-entry-model';

@Component ({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationEntries: Education_Entry[];

  constructor() {
    this.educationEntries = [
      {
        title: 'Mechanical Engineering & Technology',
        eduType: 'Bachelors of Science',
        where: 'Virginia State University',
        dateRange: '2006 - 2010',
        additionalInfo: [
          'Cumulative GPA: 3.2'
        ]
      }
    ]
  }
}
