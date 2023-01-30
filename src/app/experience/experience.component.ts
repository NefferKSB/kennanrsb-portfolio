import { Component, OnInit } from '@angular/core';
import { Work_Entry } from '../models/work-entry-model';
import { ResponsiveService } from '../services/responsive-service';

@Component ({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  expLineStart: number;
  expLineLimit: number;
  fontSize: string;
  display: string;
  screenSize: string = this.responsiveService.screenWidth;
  workEntries: Work_Entry[];

  constructor(private responsiveService: ResponsiveService) {
    this.expLineStart = 0;
    this.expLineLimit = 2;
    this.fontSize = '1.3em';
    this.display = 'inline-block';
    this.workEntries = [
      {
        company: 'Sentara Healthcare',
        position: 'Principal Domain Architect',
        dateRange: 'Feb 2022 - Current',
        experience: [
          "Extensive experience in ServiceNow implementation and administration",
          "In-depth knowledge of the ServiceNow platform, including custom development, scripting, and reporting",
          "Strong understanding of ITIL framework and ITSM processes",
          "Experience with Agile methodologies and project management",
          "Ability to design and implement ServiceNow solutions to meet business requirements",
          "Strong skills in ServiceNow scripting languages",
          "Experience with integrating ServiceNow with other systems and applications",
          "Ability to provide technical guidance and mentorship to team members",
          "ServiceNow mobile app development experience",
          "Participated in and lead workshops regarding implementation of new functionality in Sentara’s ServiceNow instance",
          "Worked closely with Business Process Owners to scope Ideas and Demands tied to their respective Business Processes ",
          "Participated in implementation of SPM modules in Sentara’s instance: Idea, Demand, Project, Project Task, Resource Plan",
          "Participated in implementation of GRC modules in Sentara’s instance: Issue, Remediation Task"
        ]
      },
      {
        company: 'Sentara Healthcare',
        position: 'Senior Software Engineer',
        dateRange: 'Feb 2021 - Feb 2022',
        experience: [
          "Built multiple integrations with Workday for Chart of Accounts (COA) data imports leveraging ServiceNow Scripted REST APIs",
          "Arranged regular communications with Workday developers for testing and troubleshooting integration issues",
          "Lead workshops with internal COA Stakeholders to define use cases for a re-designed Service Portal checkout form",
          "Worked extensively on customizing the OOTB cart checkout widget to align with internal COA Stakeholder defined use cases",
          "Assisted in the data migration of legacy Idea, Demand, and Cost Plan data from SharePoint into ServiceNow",
          "Worked closely with other members of the ServiceNow support team to resolve Incidents placed by internal IT users",
          "Performed routine Release and Change duties, including the migration of update sets / configurations into Sentara's production environment",
          "Supported other team members with troubleshooting Enhancement related issues",
          "Occasionally assisted with scoping Demands",
          "Placed Ideas for platform improvements"
        ]
      },
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

  ngOnInit() {
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);
  }

  showMoreExpLines(){
    this.expLineLimit = this.expLineLimit + 4;
  }

  showLessExpLines(){
    this.expLineLimit = 2;
  }

  onResize(event: any){
    this.responsiveService.checkWidth();
    this.screenSize = this.responsiveService.screenWidth;
    this.setResponsiveAttrs(this.screenSize);
  }

  setResponsiveAttrs(screenSize: string) {
    if(screenSize === 'lg') {
      this.fontSize = "1.3em";
      this.display = 'inline-block';
    }
    if(screenSize === 'md') {
      this.fontSize = "1.2em";
      this.display = 'inline-block';
    }
    if(screenSize === 'sm') {
      this.fontSize = "1em";
      this.display = 'block';
    }
  }
}
