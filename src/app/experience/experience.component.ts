import { Component } from '@angular/core';
import { Work_Entry } from '../models/work-entry-model';

@Component ({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  expLineStart: number;
  expLineLimit: number;
  workEntries: Work_Entry[];

  constructor() {
    this.expLineStart = 0;
    this.expLineLimit = 2;
    this.workEntries = [
      {
        company: 'Plat4mation',
        position: 'Technical Consultant',
        dateRange: 'Jul 2018 - Nov 2020',
        experience: [
          "Implemented ServiceNow ITSM instances following ServiceNow's best practices",
          "Experience developing for Project Portfolio Management (ITBM - PPM) instances",
          "Experience with upgrading instances",
          "Experience with cloning instances ",
          "Experience implementing Agent and Now mobile",
          "Experience implementing Walk-up Experience",
          "Experience working in an Agile environment",
          "Experience writing detailed stories",
          "Created business rules, script includes, UI policies, etc based on client requests and best practices",
          "Migrated data from a client's legacy system into ServiceNow",
          "Experience Implementing Agent mobile and Now mobile",
          "Performed duties as a technical consultant for one of Plat4mation's largest contracts at the time",
          "Experience developing and designing service portals for clients",
          "Experience creating ServiceNow reports and dashboards",
          "Worked closely with clients to understand their processes and needs",
          "Can work well both independently and in groups",
          "Working knowledge of JavaScript, Angular, CSS, and HTML5"
        ]
      },
      {
        company: 'CtrlShift',
        position: 'Volunteer Frontend Developer',
        dateRange: 'Jan 2018 - Jul 2018',
        experience: [
          "Updated / Redesigned CtrlShift's landing page using HTML, CSS, Bootstrap, JS, and jQuery",
          "Updated / Redesigned CtrlShift’s events page using HTML, CSS, Bootstrap, Google Calendar API, JS and FullCalendar"
        ]
      },
      {
        company: 'NGC Transmission Equipment (America), Inc',
        position: 'Applications Engineer',
        dateRange: 'Aug 2015 - Jun 2017',
        experience: [
          "Built sale order and quote logs using Excel/Visual Basic for Applications",
          "Built a industrial gearbox coupling pre-selection tool using Excel/Visual Basic for Applications",
          "Built a industrial gearbox dimensional comparison tool using Excel",
          "Assisted in the launch of NGC's newest industrial gearbox offering for North America",
          "Assisted in the creation of procedures for the Application Engineering department",
          "Prepared and analyzed on-site inspection reports"
        ]
      },
      {
        company: 'Sumitomo Drive Technologies',
        position: 'Sales Support Engineer ',
        dateRange: 'Jan 2014 - Aug 2015',
        experience: [
          "Functioned as global technical support for assembly centers",
          "Prepared AutoCAD drawings",
          "Made industrial gearbox selections based on customer supplied specifications",
          "Entered and managed orders for assembly centers",
          "Communicated with European suppliers on technical specifications of sourced gearbox components"
        ]
      },
      {
        company: 'Hansen Transmissions',
        position: 'Applications Engineer',
        dateRange: 'Mar 2012 - Jan 2014',
        experience: [
          "Entered and managed all gearbox sales orders for Hansen North America",
          "Troubleshot technical issues with customers via phone / email",
          "Created excel spreadsheets for large quantity projects ",
          "Used Wincarat software to design industrial gearboxes",
          "Exhibited at trade shows",
          "Performed quality checks on outgoing gearboxes",
          "Prepared industrial gearbox quotes",
          "Provided detailed technical information to the customer"
        ]
      }
    ]
  }

  showMoreExpLines(){
    this.expLineLimit = this.expLineLimit + 4;
  }

  showLessExpLines(){
    this.expLineLimit = this.expLineLimit - 4;
  }
}
