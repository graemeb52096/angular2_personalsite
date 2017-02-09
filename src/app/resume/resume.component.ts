import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  contacts =[
    'batesg1996@gmail.com',
    'https://github.com/graemeb52096'
  ];

  personal_summary = 'A self driven problem solver, with a passion for web development, who loves learning and working with new tools and APIs. Graeme has experience working in a fast pace startup environment where one must coordinate with a team as well as be individually driven. As someone who is passionate about web technologies, he continues to learn and use modern web practices.'

  skills = [
    {'title':'Python', 'experience':'4'},
    {'title':'Java', 'experience':'6'},
    {'title':'Linux Servers', 'experience':'3'},
    {'title':'Javascript', 'experience':'5'},
    {'title':'Angular', 'experience':'2'},
    {'title':'HTML/CSS', 'experience':'6'},
    {'title':'MySQL', 'experience':'2'},
    {'title':'Web.py', 'experience':'3'},
  ];

  positions = [
    {
      'title': 'Intern Web Developer',
      'company': 'Powerhive',
      'start': '06/14',
      'end': '',
      'location': 'Berkeley, CA',
      'summary': 'Worked as a intermittent project based contractor, developing a business tool used by analysts. Powerhive is a fast paced start-up where one must be able to be self directed while still being on the same page as the team.',
      'responsibilities': ['Developing and maintaining front-end and backend features', 'Python Restful Api used with an AngularJs front-end', 'Designing and Developing new features based on growing and changing business practice', 'Managing and maintaining linux server for site']
    },
    {
      'title': 'Leader',
      'company': 'Youth and Government',
      'start': '09/11',
      'end': '02/14',
      'location': 'Albany, CA',
      'summary': 'Youth and Government is a model California Legislature and Court YMCA program for high school students. ' +
      'During the three years I participated in the Albany Delegation I served two leadership positions ' +
      'as a locally elected Sergeant at Arms and as a state wide Bill Chair, ' +
      'leading a team of twenty delegates from around the state. ' +
      'During my time in Y&G, I learned how to be an effective leader, to work well with a team, and to be a quick thinker, ' +
      'as I served as an Assembly member all three years, participating on Bill debates.',
      'responsibilities': ['Keeping weekly meetings on time', 'Lead a group of roughly 20 delegate through the bill process', 'Teaching parliamentary procedure']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
