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
          'Cumulative GPA: 3.2',
          'Graduated with honors'
        ]
      },
      {
        title: 'Angular & NodeJS - The MEAN Stack Guide - Maximilian Schwarzmüller',
        eduType: 'Online Self Study',
        where: 'Udemy',
        dateRange: '2019 - 2020',
        additionalInfo: [
          'Covered MongoDB, Express, Angular, and NodeJS fundementals',
          'Covered user authentication using JSON Web Tokens',
          'Built Simple post application'
        ]
      },
      {
        title: 'Free Code Camp',
        eduType: 'Online Self Study',
        where: 'freecodecamp.org',
        dateRange: '2018 - 2018',
        additionalInfo: [
          'Covered HTML, CSS, and JavaScript fundementals',
          'Covered Responsive Web Design using Bootstrap',
          'Built first portfolio site using jQuery, HTML, and CSS',
          'Covered APIs and AJAX calls'
        ]
      },
      {
        title: 'The Web Developer Bootcamp - Colt Steele',
        eduType: 'Online Self Study',
        where: 'Udemy',
        dateRange: '2017 - 2018',
        additionalInfo: [
          'Covered HTML, CSS, and JavaScript fundementals',
          'Covered React fundementals'
        ]
      },
    ]
  }
}
