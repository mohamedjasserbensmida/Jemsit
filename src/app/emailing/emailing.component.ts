import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emailing',
  templateUrl: './emailing.component.html',
  styleUrls: ['./emailing.component.css']
})
export class EmailingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({behavior: 'smooth'});
    }
  }

}
